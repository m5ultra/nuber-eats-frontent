import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  email: string
  password: string
}

export const LoginOutRouter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  const onInvalid = () => {
    console.log('cant create account')
  }
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <h1>Logged Out</h1>
      <p>
        <input
          {...register('email', { required: 'This is required.', pattern: /^[A-Za-z0-9.%+-]+@outlook.com$/ })}
          name={'email'}
          type={'email'}
          placeholder={'email'}
        />
      </p>
      <p>
        {errors.email?.message && <span className={'font-bold text-red-600'}>{errors.email?.message}</span>}
        {errors.email?.type === 'pattern' && (
          <span className={'font-bold text-red-600'}>Only Outlook Email is Allowed</span>
        )}
      </p>
      <p>
        <input
          {...register('password', { required: 'This is required.', minLength: 6, maxLength: 30 })}
          name={'password'}
          type={'password'}
          placeholder={'password'}
        />
      </p>
      <p>
        {errors.password?.message && <span className={'font-bold text-red-600'}>{errors.password?.message}</span>}
        {(errors.password?.type === 'minLength' || errors.password?.type === 'maxLength') && (
          <span className={'font-bold text-red-600'}>Password Length must be 6～30</span>
        )}
      </p>
      <p>
        <input className={'bg-yellow-300 text-white'} type="submit" />
      </p>
    </form>
  )
}
