import React from 'react'
import { useForm } from 'react-hook-form'
import { btn, input } from '../styles/common'
interface ILoginForm {
  email?: string
  password?: string
}
export const Login = () => {
  const { register } = useForm<ILoginForm>()
  return (
    <div className={'h-screen flex items-center justify-center bg-gray-800'}>
      <div className={'bg-white w-full max-w-lg py-10 rounded-lg text-center'}>
        <h3 className={'font-bold text-2xl text-gray-800'}>Login</h3>
        <form className={'flex flex-col mt-5 px-5'}>
          <input
            {...register('email', { required: 'This is required.' })}
            type="text"
            placeholder={'Email'}
            className={`${input} mb-3`}
          />
          <input type="password" placeholder={'Password'} className={`${input}`} />
          <button className={`${btn} mt-3`}>Log In</button>
        </form>
      </div>
    </div>
  )
}
