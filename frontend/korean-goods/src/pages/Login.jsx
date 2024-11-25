import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomContext } from '../js/Context';

export default function Login() {


  const {loginUser} = useContext(CustomContext);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({mode: 'onBlur'});

  const onSubmitForm = (data)=>{
    loginUser(data);
  }

  return (
    <div className='formBlock'>
    <form className='form' onSubmit={handleSubmit(onSubmitForm)}>

      <legend>Вход</legend>

      <label htmlFor="form__label">
          <input {...register('email', {
            required:{
              message: 'заполните поле',
              value: true
            },

            minLength: {
              message: 'минимальная длина 10 символов',
              value: 10
            },

            pattern: {
              message: 'напишите правильно email',
              value: /^[^]+@[^]+\.[a-z]{2,5}$/
            }

          })}
          style={errors.login && {border: '1px solid red'}}
          type="text" placeholder='Введите email'/>
          <span className='form__error'>{errors.email && errors.email.message}</span>
        </label>

      <label htmlFor="form__label">
        <input {...register('password', {
          required:{
            message: 'заполните поле',
            value: true
          },

          minLength: {
            message: 'минимальная длина 6 символов',
            value: 6
          }

        })}
        style={errors.password && {border: '1px solid red'}}
        type="password" placeholder='Введите пароль'/>
        <span className='form__error'>{errors.password && errors.password.message}</span>
      </label>

      <button className='form__btn' type='submit'>Войти</button>
      <p><Link to='/register'>Регистрация</Link></p>
    </form>
  </div>
  )
}
