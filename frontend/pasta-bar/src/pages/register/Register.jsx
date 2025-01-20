import React from 'react'
import { Link } from 'react-router-dom';
import { context } from '../../services/context/context';
import { RiCloseLargeLine } from "react-icons/ri";
import '../login/Login.scss';
import { useForm } from 'react-hook-form';

export default function Register() {

    const {setRegister, setLogin, registerUser} = React.useContext(context);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: 'onBlur'});

    const onSubmitForm = (data)=>{
        registerUser(data);
    }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="container">
            <RiCloseLargeLine className='close' onClick={()=>setRegister(false)}/>
            <h1 className="title">Регистрация</h1>
            <input type="text" placeholder='Ваше имя' {...register('name', {
                required: {
                    message: 'обязательно',
                    value: true
                },
                minLength: {
                    message: 'имя должно состоять не менее 3-х символов',
                    value: 3
                },
                maxLength: {
                    message: 'имя должно состоять не более 15-ти символов',
                    value: 15
                }
            })} style={errors.name && {border: '1px solid red'}}/>
            
            <input type="number" placeholder='номер телефона' {...register('number', {
                required: {
                    message: 'обязательно',
                    value: true
                }
            })} style={errors.login && {border: '1px solid red'}}/>
            <input type="email" placeholder='email' {...register('email', {
                required: {
                    message: 'обязательно',
                    value: true
                }
            })} style={errors.login && {border: '1px solid red'}}/>
            <input type="password" placeholder='password' {...register('password', {
                required: {
                    message: 'обязательно',
                    value: true
                }
            })} style={errors.login && {border: '1px solid red'}}/>

            <div className="enter">
                <Link to='/' onClick={()=>{setRegister(false); setLogin(true)}}>Вход</Link>
                <button className='login-btn'>Регистрация</button>
            </div>
        </div>
    </form>
  )
}
