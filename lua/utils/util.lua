local modbusIDS = {}
--- 使用modbus协议修改或读取数据
---@param cb function 创建modbus成功后执行的回调
---@param id number modebus链接的id
function HandleByModbus(cb, id, baudRate)
  local DEFAULT_BAUDRATE = 115200
  local MODBUS_IP = "127.0.0.1"
  local MODBUS_PORT = 60000
 
  
  if type(id) ~= "number" then
    return nil
  end
  
  if modbusIDS[id] == nil then
    local err, _modbus = ModbusCreate(MODBUS_IP, MODBUS_PORT, id, true)
    if err ~= 0 then
      return nil
    else
      modbusIDS[tonumber(id)] = _modbus
    end
  end

  local res = nil

  if type(cb) == "function" then
    res = cb(modbusIDS[id])
  end

  return res
end