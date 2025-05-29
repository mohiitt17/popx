import React from 'react'
import "./App.css"
import { Outlet } from 'react-router'
import { LogicProvider } from '../store/LogicContext'
const App = () => {
  return (
  <LogicProvider>
    <Outlet />
    </LogicProvider>
  )
}

export default App