import React, {useEffect, useState} from 'react';
import {Input, Button} from 'antd';
const App = () => {
  const [count,setCount] = useState(0)
  const handleClick = () => {
    console.log('2')
  }
  return (
    <div>
      <Input />
      <Button type={'primary'} onClick={handleClick}>点击按钮</Button>
    </div>
  )
};

export default App;