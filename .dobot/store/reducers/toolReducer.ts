import { TOOL_ACTIONS_TYPE } from '../actions/toolActions'

const initialStore = {
  portData: {
    ip: '192.168.5.1',
    port: '22000',
    isSync: false
  },
  tcpStatus: false,
  tcpInfo: [],
  extendIoData: [],
  onRobotTool: [],
  pluginPort: undefined,
  dobotplusHost: 'http://localhost:9889',
  deviceStateData: {
    prjState: 'stopped'
  },
  ioData: {
    ioList: {
      input: [...Array(1)].map((item, index) => ({
        address: index + 1,
        init: `DI_${index + 1}`,
        name: `DI_${index + 1}`,
        editName: '',
        value: 1,
        isShow: true,
        diValue: 0,
        isDI: false,
        type: 'Common',
        configurationStr: '',
        safeIOKey: 0
      })),
      inputSimulation: [...Array(1)].map((item, index) => ({
        address: index + 1,
        init: `AD_${index + 1}`,
        name: `AD_${index + 1}`,
        editName: '',
        isShow: true,
        value: 3.3
      })),
      output: [...Array(1)].map((item, index) => ({
        address: index + 1,
        init: `DO_${index + 1}`,
        name: `DO_${index + 1}`,
        editName: '',
        value: 0,
        isShow: true,
        type: 'Common',
        configurationStr: '',
        safeIOKey: 0
      }))
    },
    endEffectorIo: {
      input: [...Array(1)].map((item, index) => ({
        address: index + 17,
        init: `DI_${index + 1}`,
        name: `DI_${index + 1}`,
        editName: '',
        value: 1,
        isShow: true,
        diValue: 0,
        isDI: false
      })),
      output: [...Array(1)].map((item, index) => ({
        address: index + 17,
        init: `DO_${index + 1}`,
        name: `DO_${index + 1}`,
        editName: '',
        value: 1,
        isShow: true
      }))
    },
    isShowInputAll: true,
    isShowOutputAll: true,
    ioAO: [0, 0],
    ioAI: [0, 0],
    ioAIUnit: { mode1: 0, mode2: 0 },
    ioAOUnit: { mode1: 0, mode2: 0 },
    endAIUnit: { mode1: 0, mode2: 0, mode3: 0, mode4: 0 },
    endAI: [0, 0, 0, 0],
    toolMode: { mode1: 1, mode2: 1 },
    ioData: {}
  },
  pointData: [],
  jogInPaused: false
}

const toolReducer = (
  state = initialStore,
  action: { type: string; params: any }
) => {
  switch (action.type) {
    case TOOL_ACTIONS_TYPE.SET_PORT_IP: {
      return Object.assign({}, state, {
        portData: {
          ip: action.params,
          port: state.portData.port,
          isSync: true
        }
      })
    }
    case TOOL_ACTIONS_TYPE.SET_PORT: {
      return Object.assign({}, state, {
        portData: {
          ip: state.portData.ip,
          port: action.params,
          isSync: true
        }
      })
    }
    case TOOL_ACTIONS_TYPE.SET_TCP_STATUS: {
      return Object.assign({}, state, { tcpStatus: action.params })
    }
    case TOOL_ACTIONS_TYPE.SET_TCP_INFO: {
      return Object.assign({}, state, { tcpInfo: action.params })
    }
    case TOOL_ACTIONS_TYPE.SET_EXTEND_IO_INDEX: {
      const newData = action.params.map((item: any) => {
        return {
          name: item.name,
          DONumber: item.doNumber,
          DOStart: item.doStart,
          DINumber: item.diNumber,
          DIStart: item.diStart
        }
      })
      return Object.assign({}, state, { extendIoData: newData })
    }
    case TOOL_ACTIONS_TYPE.SET_ONROBOT_TOOL: {
      return Object.assign({}, state, { onRobotTool: action.params })
    }
    case TOOL_ACTIONS_TYPE.SET_DEVICE_STATE_DATA: {
      return Object.assign({}, state, { deviceStateData: action.params })
    }
    case TOOL_ACTIONS_TYPE.SET_PLUGIN_PORT: {
      return Object.assign({}, state, { pluginPort: action.params })
    }
    case TOOL_ACTIONS_TYPE.SET_DOBOTPLUS_HOST:
      return Object.assign({}, state, { dobotplusHost: action.params })
    case TOOL_ACTIONS_TYPE.SET_IO_DATA: {
      return Object.assign({}, state, { deviceStateData: action.params })
    }
    case TOOL_ACTIONS_TYPE.SET_POINT_DATA:
      return Object.assign({}, state, { pointData: action.params })
    case TOOL_ACTIONS_TYPE.SET_JOG_IN_PAUSED:
      return Object.assign({}, state, { jogInPaused: action.params })
    default:
      return state
  }
}

export default toolReducer
