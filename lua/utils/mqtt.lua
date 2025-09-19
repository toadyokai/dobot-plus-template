local jsonLuaUtils = require("luaJson")
local mqttFunc = require("libplugin_eco")

local MQTT_PUBLISH_TOPIC = "$PLUGIN_MSG_TOPIC$"
local connectId = "$PLUGIN_NAME$"

mqttFunc.MQTTCreate(connectId,"127.0.0.1",1883,600)
mqttFunc.MQTTConnect(connectId)

return {
  mqtt = mqttFunc,
  --- 发布数据到指定的 MQTT 主题。
  --- @param data table  要发布的数据，数据将被编码为 JSON 格式。
  publish = function(data)
    mqttFunc.MQTTPublish(connectId, MQTT_PUBLISH_TOPIC, jsonLuaUtils.encode(data), 0, false)
  end
}