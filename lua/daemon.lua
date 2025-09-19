--- @module daemon
--- @description This is the daemon module for the plugin.
--- 该模块插件的入口进程，在插件安装成功后自动执行该文件中的 EventLoop 方法，该方法会不断的执行，直到程序退出。

local mqtt = require('utils.mqtt')

local function handleInLoop()
  local data = {}
  mqtt.publish(data)
end

local function EventLoop()
  while true do
    handleInLoop()
    Wait(1000)
  end
end

local thread = systhread.create(EventLoop, 1)
thread:wait()


