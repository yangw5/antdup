/*
 * @File:
 * @Description:文件操作
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-25 13:56:57
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-02 16:51:14
 * @FilePath: \antdup\copy.js
 */
//fs-extra模块是系统fs模块的扩展
// const fs = require("fs-extra");

// //同步文件复制操作方法
// fs.copySync(__dirname + "/src", __dirname + "/lib", {
//   dereference: true,
//   filter: file => !file.includes(".js") // 函数或正则表达式过滤复制文件,返回true包含，否则排除
// });

const glob = require("glob");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const less = require("less");

const files = glob.sync("src/**/**.less");

const stylePromises = files.map(file => {
  const content = fs.readFileSync(file);
  return less.render(content.toString());
});
Promise.all(stylePromises)
  .then(all => {
    fs.writeFileSync(
      path.join(__dirname, "lib/index.css"),
      all.map(v => v.css).join("")
    );
    console.log(chalk.green("###########成功复制样式文件###########"));
  })
  .catch(err => {
    console.log(chalk.red(err));
    console.log(chalk.red("###########复制样式文件失败###########"));
  });
