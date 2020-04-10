// 使用Store
import React from 'react';
import { Provider } from 'mobx-react'
import stores from './stores'
import Home from './pages/Home'

function App () {
  return (
    <div>
      <Provider {...stores}>
        <Home/>
      </Provider>
    </div>
  )
}

export default App;
