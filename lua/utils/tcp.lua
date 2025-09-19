--- 通用TCP连接函数
---@param ip string
---@param port number
---@param timeout number
---@return table result
function CreateTCPConnection(ip, port, timeout)
  -- 初始化错误码和socket对象
  local SUCCESS = 0
  local FAIL = 1
  local err = SUCCESS
  local Socket = nil

  -- 创建TCP客户端
  err, Socket = TCPCreate(false, ip, port)
  if err ~= SUCCESS then
      print("Create TCP Client failed, code:", err)
      return { errorCode = err, socket = nil }
  end

  -- 尝试建立TCP连接
  err = TCPStart(Socket, timeout or 10)  -- 使用传入的timeout，默认10秒
  if err ~= SUCCESS then
      print("Connect TCP Client failed, code:", err)
      TCPDestroy(Socket)
      return { errorCode = err, socket = nil }
  end

  -- 连接成功，返回成功状态和socket对象
  print("Connect TCP Client Success!")
  return { errorCode = nil, socket = Socket }
end