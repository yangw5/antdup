## react-antdup

自定义组件库react-antdup，是由一些自定义基础组件，第三方组件进行结合的一个综合组件库。

[react-antdup源码](https://github.com/yangw5/antdup)：https://github.com/yangw5/antdup

源码下载：

    git clone https://github.com/yangw5/antdup.git

### 使用
    
    npm install react-antdup
    或
    yarn add react-antdup

### 组件库搭建
#### 项目初始化

#### 

### 组件测试
#### 单元测试 jest
#### UI组件测试  Storybook
Storybook是一个开源工具，用于独立开发React、Vue和Angular的UI组件。它能有组织和高效地构建UI组件。

* 安装

        npm i -g @storybook/cli
        或者
        npx -p @storybook/cli sb init
* 使用：

        npm run storybook
* 注意
1. 运行失败 因为babel-loader有bable的版本与storybook不一致导致。
2. 项目中如果有less，sass等,需要进行webpack的配置，对less进行转换，当然需要下载相应的文件依赖。（less less-loader ...）

使用说明：
[https://juejin.im/post/5e3d0ec25188254975580c81](https://juejin.im/post/5e3d0ec25188254975580c81)

### 组件发布

1. 在 npm 上申请账号
1. 确保组件的名称有效且唯一
1. 打包： npm compile 
2. 上传： npm publish

### 组件库组件
1. 提示框组件
2. 图片原图组件