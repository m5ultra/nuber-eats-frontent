import React, { useState } from 'react'
// import {isLoggedInVar} from "../apollo"

export const LoginOutRouter = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onChange = (e: { target: { name: string; value: string } }) => {
    const {
      target: { name, value },
    } = e
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(password)
    }
  }
  return (
    <div>
      <h1>Logged Out</h1>
      <form action="">
        <input type="email" name={'email'} onChange={onChange} required placeholder={'email'} value={email} />
        <input type="email" name={'password'} onChange={onChange} required placeholder={'email'} value={password} />
      </form>
    </div>
  )
}
