import React from 'react'
import './entry.css'
import { createRoot } from 'react-dom/client'
import { Card, Space } from 'antd'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <div className="container">
        <h2>插件页面</h2>
        <Space>
          <Card
            title={
              <Space>
                <span>导航栏</span>
                <a href="/Toolbar/toolbar.html">预览|调试</a>
              </Space>
            }
          >
            <div className="iframe-container">
              <iframe src="/Toolbar/toolbar.html"></iframe>
            </div>
          </Card>
          <Card
            title={
              <Space>
                <span>控制页面</span>
                <a href="/Main">预览|调试</a>
              </Space>
            }
          >
            <div className="iframe-container">
              <iframe src="/Main"></iframe>
            </div>
          </Card>
          <Card
            title={
              <Space>
                <span>积木弹窗</span>
                <a href="/Blocks">预览|调试</a>
              </Space>
            }
          >
            <div className="iframe-container">
              <iframe src="/Blocks"></iframe>
            </div>
          </Card>
        </Space>
      </div>
    </React.StrictMode>
  )
}
