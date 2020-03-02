<!--
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-27 10:27:26
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-02 16:51:37
 * @FilePath: \antdup\README.md
 -->

## react-antdup

自定义组件库 react-antdup，是由一些自定义基础组件，第三方组件进行结合的一个综合组件库。

[react-antdup 源码](https://github.com/yangw5/antdup)：https://github.com/yangw5/antdup

源码下载：

    git clone https://github.com/yangw5/antdup.git

### 使用

    npm install react-antdup
    或
    yarn add react-antdup

### 组件库搭建

#### 项目初始化

#### 对项目所有样式统一导出

通过 copy 文件对项目所有样式统一导出,配置 package。

    npm run story

### 组件测试

#### 单元测试 jest

#### UI 组件测试 Storybook

Storybook 是一个开源工具，用于独立开发 React、Vue 和 Angular 的 UI 组件。它能有组织和高效地构建 UI 组件。

- 安装

        npm i -g @storybook/cli
        或者
        npx -p @storybook/cli sb init

- 使用：

        npm run storybook

- 注意

1. 运行失败 因为 babel-loader 有 bable 的版本与 storybook 不一致导致。
2. 项目中如果有 less，sass 等,需要进行 webpack 的配置，对 less 进行转换，当然需要下载相应的文件依赖。（less less-loader ...）

使用说明：
[https://juejin.im/post/5e3d0ec25188254975580c81](https://juejin.im/post/5e3d0ec25188254975580c81)

### 组件发布

1. 在 npm 上申请账号
1. 确保组件的名称有效且唯一
1. 打包： npm compile
1. 上传： npm publish

### 组件库组件

1. 提示框组件
2. 图片原图组件
