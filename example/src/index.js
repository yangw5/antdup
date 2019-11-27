/*
 * @File:
 * @Description:实例页面入口
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-22 15:44:49
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-22 17:27:04
 * @FilePath: \antdup\example\src\app.js
 */
import React from "react";
import { render } from "react-dom";
import { Alert } from "../../src/index";

const App = () => <Alert />;
render(<App />, document.getElementById("root"));
