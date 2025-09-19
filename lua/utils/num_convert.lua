local NumberConversion = {}

-- 将二进制字符串转换为十进制数
function NumberConversion.binaryToDecimal(binaryStr)
    return tonumber(binaryStr, 2)
end

-- 将十进制数转换为二进制字符串
function NumberConversion.decimalToBinary(dec)
    local binaryStr = ""
    while dec > 0 do
        local remainder = dec % 2
        binaryStr = remainder .. binaryStr
        dec = math.floor(dec / 2)
    end
    return binaryStr == "" and "0" or binaryStr
end

-- 将十六进制字符串转换为十进制数
function NumberConversion.hexToDecimal(hexStr)
    return tonumber(hexStr, 16)
end

-- 将十进制数转换为十六进制字符串
function NumberConversion.decimalToHex(dec)
    return string.format("%X", dec)
end

-- 将二进制字符串转换为十六进制字符串
function NumberConversion.binaryToHex(binaryStr)
    local dec = NumberConversion.binaryToDecimal(binaryStr)
    return NumberConversion.decimalToHex(dec)
end

-- 将十六进制字符串转换为二进制字符串
function NumberConversion.hexToBinary(hexStr)
    local dec = NumberConversion.hexToDecimal(hexStr)
    return NumberConversion.decimalToBinary(dec)
end

return NumberConversion
