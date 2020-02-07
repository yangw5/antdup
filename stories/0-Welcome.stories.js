import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () =><div>
   <Welcome showApp={linkTo('Button')} />;
   <div>
    自定义组件库react-antdup，是由一些自定义基础组件，第三方组件进行结合的一个综合组件库。
  </div>
</div>

ToStorybook.story = {
  name: 'to Storybook',
};
