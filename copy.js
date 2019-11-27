/*
 * @File:
 * @Description:文件操作
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-25 13:56:57
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-26 14:16:25
 * @FilePath: \react-antdup\copy.js
 */
//fs-extra模块是系统fs模块的扩展
const fs = require("fs-extra");

//同步文件复制操作方法
fs.copySync(__dirname + "/src", __dirname + "/lib", {
  dereference: true,
  filter: file => !file.includes(".js") // 函数或正则表达式过滤复制文件,返回true包含，否则排除
});