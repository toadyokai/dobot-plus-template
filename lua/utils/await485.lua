require('utils.variables')
require("utils.util")
local lockerName = "dobot_485_lock"

--- 配置并锁定 485 接口。
--- @param duration number|nil  锁定持续时间（毫秒），默认为 10000 毫秒。
--- @param waitTime number|nil  等待锁定的最大时间（毫秒），默认为 10000 毫秒。
--- @return boolean  返回是否成功锁定。
function Use485(duration, waitTime)
  local _duration = 10000
  if duration then
    _duration = duration
  end
  
  local result = Lock(lockerName, _duration, waitTime == nil and 10000 or waitTime)
  Wait(10)
  return result
end

--- 使用 485 接口写入 Modbus 寄存器。
--- @param modbusID number  Modbus 从机地址。
--- @param address number  寄存器地址。
--- @param datas table  要写入的数据列表。
--- @return boolean  返回是否成功写入。
function WriteBy485(modbusID, address, datas)
  local result = Lock(lockerName, 10000, 10000)
  Wait(10)

  SetHoldRegs(modbusID, address, #datas, datas)
  
  Wait(10)
  UnLock485()
  return result
end

--- 使用 485 接口读取 Modbus 寄存器。
--- @param modbusID number  Modbus 从机地址。
--- @param address number  寄存器地址。
--- @param num number  要读取的寄存器数量。
--- @return table  返回读取的数据列表。
function ReadBy485(modbusID, address, num)
  local result = Lock(lockerName, 10000, 10000)
  Wait(10)

  local registerData = GetHoldRegs(modbusID, address, num)
  
  Wait(10)
  UnLock485()
  return registerData
end

--- 解锁 485 接口。
function UnLock485()
  UnLock(lockerName)
end
