import React from 'react'
import { Link } from 'react-router-dom';
import { RiCloseLargeLine } from "react-icons/ri";
import './Login.scss';
import { context } from '../../services/context/context';
import { useForm } from 'react-hook-form';

export default function Login() {

  const {setLogin, setRegister, loginUser} = React.useContext(context);

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
    <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form__container">
            <RiCloseLargeLine className='close' onClick={()=>setLogin(false)}/>

            <h1 className="title">Вход на сайт</h1>
            
            <input type="email" placeholder='email' {...register('email', {
                required: {
                    message: 'обязательно',
                    value: true
                },
                minLength: {
                    message: 'обязательно',
                    value: 6
                },
                
            })} style={errors.email && {border: '1px solid red'}}/>

            <input type="text" placeholder='password' {...register('password', {
                required: {
                    message: 'обязательно',
                    value: true
                },
                minLength: {
                    value: 6
                }
            })} style={errors.password && {border: '1px solid red'}}/>

            <div className="enter">
                <Link to='/' onClick={()=>{setLogin(false); setRegister(true)}}>Регистрация</Link>
                <button className='login-btn'>Вход</button>
            </div>
        </div>
    </form>
  )
}
