import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Text1 from '../src/text'
export default {
  title: '案例',
  component: Button,
};
export const Text = () => (<Button onClick={action('clicked')}>
<div>html案例</div>
<span role="img" aria-label="so cool">
  😀 😎 👍 💯
</span>
</Button>)

export const Cp=() => (<Text1 text={'组件案例'} />);

Text.story = {
  name: 'html类型',
};
Cp.story = {
  name: '组件类型',
};