## storybook

### 下载
1. 下载安装 npx -p @storybook/cli sb init 选择相应的type 
2. 会自动创建.storybook文件和stories文件
3. 注意与 babel-loader版本是否符合（ "^7.1.5"）

### 配置
 * npx -p @storybook/cli sb init后会自动在package.json配置：

        "scripts": {
           "storybook": "start-storybook -p 6006",
            "build-storybook": "build-storybook"
        }


 * 启动时 如果有相关插件报错，需要webpack进行配置对应的loder的配置

### 语法

1. Addon：插件
1. stories：用例应用场景
1. Decorator:Story做个包装
1. Notes:Story备注，支持md

### 用例定义

1. html定义
2. 组件定义

#### 步骤 
1. 引入相关组件

        import { action } from '@storybook/addon-actions';
        import { Button } from '@storybook/react/demo';

2. 定义用例组件

  * 导航栏定义

        export default {
          title: '导航栏名称',
          component: Button,
        };
  * 用例定义

      export const Text=() => (<Text1 text={'组件案例'} />);

      Text.story = {
        name: '用例标题',
      };

### 运行

        npm  run storybook