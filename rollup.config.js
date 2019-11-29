/*
 * @File:rollup.config.js
 * @Description:rollup打包模块配置
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-29 09:13:14
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-29 09:48:25
 * @FilePath: \antdup\rollup.config.js
 */
import { eslint } from "rollup-plugin-eslint";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

function ourUmd() {
  return {
    name: pkg.name,
    // globals字段与external是配套使用的，表示global.React即是外部依赖react。
    globals: {
      react: "React"
    }
  };
}

function outSource(format) {
  return {
    // 入口 可以是一个字符串，也可以是对象
    input: `/src/index.${format}.js`,
    // 将模块视为外部模块，不会打包在库中
    external: ["react", "react-dom", "antd"],
    output: {
      //打包多个文件 为数组
      name: pkg.name,
      ...(format === "umd" && ourUmd()),
      file: "/rollupLib/tool.js",
      format: format, // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
      sourcemap: true
    },
    // 需要引入的插件 Rollup的插件添加顺序决定了在构建过程中插件的调用顺序
    plugin: [
      nodeResolve(),
      eslint(),
      //rollup-plugin-babel 插件不编译 node_modules
      babel({
        exclude: "node_modules/**", // 只编译源代码
        runtimeHelpers: true
      }),
      commonjs()
    ],
    // 文件监听
    watch: {},
    //按包分离
    // experimentalCodeSplitting: true,
    onwarn
  };
}

function onwarn(warning, rollupWarn) {
  if (warning.code !== "CIRCULAR_DEPENDENCY") {
    rollupWarn(warning);
  }
}

export default [...["umd"].map(format => outSource(format))];
