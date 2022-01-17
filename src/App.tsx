import React from 'react'
import { LoginOutRouter } from './routers/login-out-router'
import { useReactiveVar } from '@apollo/client'
import { LoginInRouter } from './routers/logged-in-router'
import { isLoggedInVar } from './apollo'

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  return isLoggedIn ? <LoginInRouter /> : <LoginOutRouter />
}

export default App
