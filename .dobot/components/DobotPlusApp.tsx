import { ReactNode, useEffect } from 'react'
import { MqttWebSocketClient } from '../utils/mqtt'
import dptConfig from '../../dpt.json'
import MainConfig from '../../configs/Main.json'
import { getPluginPort } from '@dobot/http/axios'
import '@dobot/protocol/methodsHandler'
import { toolActions } from '@dobot/store/actions/toolActions'
import store from '@dobot/store'
import { useSelector } from 'react-redux'
import { IStoreState } from '@dobot/store/types'

type BasicProps = {
  children: ReactNode
}

export type DobotPlusAppProps =
  | (BasicProps & {
      useMqtt: true
      topic?: string
      onMessage: (data: object | string) => void
      port?: number
    })
  | (BasicProps & {
      useMqtt?: false
    })

export function DobotPlusApp(props: DobotPlusAppProps) {
  const { children, useMqtt } = props
  const { portData } = useSelector((state: IStoreState) => state.toolReducer)
  useEffect(() => {
    const pluginName = MainConfig.name
    const pluginVersion = MainConfig.version

    if (useMqtt) {
      const { topic, onMessage, port } = props

      const ip = process.env.NODE_ENV === 'production' ? portData.ip : dptConfig.ip

      if (ip && onMessage) {
        const serverUrl = `ws://${ip}:${port || 8083}/mqtt`
        const clientId = `${pluginName}_clientId`
        const mqttClient = new MqttWebSocketClient(serverUrl, clientId)
        mqttClient.connect()
        mqttClient.subscribe(topic || `${pluginName}Status`, (topic, buf) => {
          let data = {}
          try {
            data = JSON.parse(buf.toString())
          } catch {
            data = buf.toString()
          }
          onMessage(data)
        })
      }
    }

    getPluginPort()
      .then((res) => {
        const { data } = res
        const pluginKey = data[`${pluginName}_v${pluginVersion}`]
        if (data) {
          console.log('pluginPorts', data)
          const pluginPort = data[pluginKey]
          if (!pluginPort) {
            setTimeout(() => {
              getPluginPort()
            }, 500)
          } else {
            store.dispatch(toolActions.setPluginPort(pluginPort))
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [portData.isSync])

  return <>{children}</>
}
