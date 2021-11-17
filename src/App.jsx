import React, {useEffect, useState} from 'react';

const App = () => {
  const [count,setCount] = useState(0)
  useEffect(() => {
    console.log('11')
  }, [count])
  return (
    <button>点击按钮</button>
  )
};

export default App;