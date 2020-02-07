import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Alert from '../src/alert';

// const fu1=(type)=>{
//   action('clicked')
//   switch(type){
//     case 1:
//       Alert.warning({text:'警告'});
//       break;
//     case 2:
//       Alert.success({text:'成功'});
//       break;
//     default:
//       Alert.error({text:'错误'});
//   }
// }
const fu1=(type)=>{
  action('clicked')
  Alert.warning({text:'警告'});
}
const fu3=()=>{
  action('clicked')
  Alert.error({text:'错误'});
}
const fu2=()=>{
  action('clicked')
  Alert.success({text:'成功'});
}
export default {//父标题定义
  title: 'stone',
  component: Button,
  decorators:''
};
//子标题定义 
export const Y5Alert = () => <div>
  <Button style={{color:'#f8bb86'}} onClick={fu1}>warn</Button>
  <Button style={{color:'#a5dc86'}} onClick={fu2}>sucess</Button>
  <Button style={{color:'red'}} onClick={fu3}>error</Button>
</div>;


Y5Alert.story = {
  name: 'Alert',
};