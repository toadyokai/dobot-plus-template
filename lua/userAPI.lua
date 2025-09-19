--- @module userAPI
--- @description This is the user API module for the plugin.
--- 该模块为脚本编程和积木编程提供插件接口

require("utils.await485")
local control = require("control")

local userApiModule = {}

--- This function will be called when you add it in the blockly programming or script programming
--- This function can be used in the httpAPI module also
---@param params table
function userApiModule.demoMethod1(params)
		return control.controlMethod1(params)
end

--- This function will be called when you add it in the blockly programming or script programming
--- This function can be used in the httpAPI module also
---@param params table
function userApiModule.demoMethod2(params)
	return control.controlMethod2(params)
end

--- This function will be called when you add it in the blockly programming or script programming
--- This function can be used in the httpAPI module also
---@param params table
function userApiModule.demoMethod3(params)
		return control.controlMethod3(params)
end

-- This function will be called when the plugin is installed
-- The export functions will be registered to the corresponding code block or script in blockly programming or script programming
-- 该函数会在插件安装后自动执行，其中 ExportFunction 函数会将第二个参数的方法导出给脚本编程和积木编程使用
-- 例如：ExportFunction('A', B) 会将当前模块中的 B 函数导出，并重命名为 'A'
-- 在脚本编程和积木编程中可以使用 A 来使用该函数 
function userApiModule.OnRegist()
	EcoLog(" --- OnRegist ....  --- ")
	-- 0. 接口导出
	local isErr = ExportFunction("demoMethod1", userApiModule.demoMethod1) or
		ExportFunction("demoMethod2", userApiModule.demoMethod2) or
		ExportFunction("demoMethod3", userApiModule.demoMethod3)
	-- 1. 错误的处理		
	if isErr then
		EcoLog(" --- ERR to  register .... --- ", isErr)
		dobotTool.SetError(0)
	end
end

return userApiModule


