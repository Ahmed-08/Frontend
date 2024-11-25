import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CustomContext } from '../js/Context';
import '../styles/register.scss';

export default function Register() {

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({mode: 'onBlur'});


  const {registerUser} = React.useContext(CustomContext);
  const onSubmitForm = (data)=>{
    registerUser(data);
  }

  return (
    <div className='formBlock'>
      <form className='form' onSubmit={handleSubmit(onSubmitForm)}>

        <legend>Регистрация</legend>

        <label htmlFor="form__label">
          <input {...register('login', {
            required:{
              message: 'заполните поле',
              value: true
            },
            maxLength: {
              message: 'максимальная длина 15 символов',
              value: 15
            },
            minLength: {
              message: 'минимальная длина 3 символов',
              value: 3
            }

          })}
          style={errors.login && {border: '1px solid red'}}
          type="text" placeholder='Введите логин'/>
          <span className='form__error'>{errors.login && errors.login.message}</span>
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

        <button className='form__btn' type='submit'>зарегистрироваться</button>
        <p><Link to='/login'>Вход</Link></p>
      </form>
    </div>
  )
}
