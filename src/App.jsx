import React from 'react';
import Age from './age';
import {Button} from 'antd';
import './app.less';

const App = () => {
  return <div className='app'>
    app page
    <Age />
    <Button type='primary'>按钮</Button>
  </div>
};

export default App;