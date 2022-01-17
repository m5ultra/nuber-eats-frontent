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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Logged Out</h1>
      <input {...register('email', { required: true })} />
      {errors.email?.type === 'required' && '邮箱地址必填'}
      <input type={'password'} {...register('password', { required: true, minLength: 6, maxLength: 30 })} />
      {errors.password?.type === 'required' && '密码不能为空'}
      <input className={'bg-yellow-300 text-white'} type="submit" />
    </form>
  )
}
