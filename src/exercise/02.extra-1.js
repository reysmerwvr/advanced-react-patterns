// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(prev => !prev)

  return React.Children.map(children, child => {
    if (!allowedTypes.includes(child.type)) return child
    const newChild = React.cloneElement(child, {
      on,
      toggle,
    })
    return newChild
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />
const MyToggleButton = ({on}) =>
  on ? 'the button is on yo.' : 'the button is off soo...'
const allowedTypes = [ToggleOn, ToggleOff, ToggleButton, MyToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <MyToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
