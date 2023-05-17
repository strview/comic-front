import React, { useEffect } from 'react'
import './App.css'
import {  Button } from '@mui/material';

import LayoutAuth from './components/layout-auth'
import LayoutPublic from './components/layout-public'
import DarkMode from './components/dark-mode'
// NOTE: i do not like semi-colons and will NOT use them in this project

function App() {
  const [mode, setMode] = React.useState('dark')
  // const [user, setUser] = React.useState(null)
  const [user, setUser] = React.useState({username : 'testuser', email : 'test@test.com', role : 'admin'})


  if(user === null) {
    return (
      <>
        <LayoutPublic/>
      </>
    )
  }

  return (
    <DarkMode mode={mode} setMode={setMode}>
      <LayoutAuth mode={mode} setMode={setMode} user={user} />
    </DarkMode>
  )


}

export default App;
