import { Button } from '@dobot-plus/components'
import { useTranslation } from 'react-i18next'
import { http, DobotPlusApp } from '@dobot/index'

function App() {
  const { t } = useTranslation()

  function handleButton1Click() {
    http.demoMethod1({})
  }

  function handleButton2Click() {
    http.demoMethod2({})
  }

  return (
    <div className="app">
      <DobotPlusApp>
        <div>{t('testKey')}</div>
        <Button type="primary" onClick={handleButton1Click}>
          Demo method 1
        </Button>
        <Button type="primary" onClick={handleButton2Click}>
          Demo method 2
        </Button>
      </DobotPlusApp>
    </div>
  )
}

export default App
