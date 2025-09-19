--- @module httpAPI
--- @description This is the http module for the plugin.
--- 该模块为控制器处理插件的 http 请求提供接口

local control = require("control")

local httpModule = {}

--- This function will be called when plugin uninstalled
--- 插件卸载时执行该函数
httpModule.OnUninstall = function()
	-- TODO 需要在插件卸载时执行的操作
end

--- This function will be called when plugin installed
--- 插件安装时自动执行该函数
httpModule.OnInstall = function()
  -- TODO 需要在插件安装时执行的操作
end

--- This function will be called when plugin installed, this action will export some http method for device hotkey binding
--- 插件安装时自动执行该函数，该函数会导出一些的http方法，供设备热键绑定使用
httpModule.OnRegistHotKey = function() 
	-- 短按：可选 demoMethod1 demoMethod2 长按：可选 demoMethod3
	return {press = {"demoMethod1", "demoMethod2"}, longPress = {"demoMethod3"}}
end

--- This method will be called when a http '/dobotPlus/[plugin name]_[plugin version]/demoMethod1' request arrived
--- The return value will response the http request, the return value is not necessory
--- @param params table 
--- @return string The return value will response the http request, the return value is not necessory
--- 该方法会在http请求接收到后，自动执行，对应请求的 url为: http://<控制器ip>:<插件端口>/dobotPlus/[插件名]_[插件版本]/demoMethod1。
httpModule.demoMethod1 = function(params)
	-- TODO 需要在接收到http请求后执行的操作
	control.controlMethod1(params)
	return {
		--- Your responce data
    status = true
	}
end

--- This method will be called when a http '/dobotPlus/[plugin name]_[plugin version]/demoMethod2' request arrived
--- The return value will response the http request, the return value is not necessory
--- @param params table
--- @return string 
httpModule.demoMethod2 = function(params)
	control.controlMethod2(params)
	return {
		--- Your responce data
		status = true
	}
end

--- This method will be called when a http '/dobotPlus/[plugin name]_[plugin version]/demoMethod3' request arrived
--- The return value will response the http request, the return value is not necessory
--- @param params table
--- @return string The return value will response the http request, the return value is not necessory
httpModule.demoMethod3 = function(params)
	control.controlMethod3(params)
	return {
		--- Your responce data
		status = true
  }
end

return httpModule
