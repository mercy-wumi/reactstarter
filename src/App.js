import React from 'react'
import ErrorExample from './tutorial/1-useState/setup/1-error-example'
import UseStateBasics from './tutorial/1-useState/setup/2-useState-basics'
import UseStateArray from './tutorial/1-useState/setup/3-useState-array'
import UseStateObject from './tutorial/1-useState/setup/4-useState-object'

function App() {
  return (
    <div className='container'>
      {/* <ErrorExample /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      <UseStateObject />
    </div>
  )
}

export default App
