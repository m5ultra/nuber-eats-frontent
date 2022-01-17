import React from 'react'
import { isLoggedInVar } from '../apollo'

export const LoginInRouter = () => (
  <div>
    <h1>Logged In</h1>
    <button onClick={() => isLoggedInVar(false)}>Click To Login</button>
  </div>
)
