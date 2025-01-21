import React from 'react';
import { Button } from '../../../shared/components/index.ts';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../app/stories/store.ts';
import { getAccess, setCheckbox, setLogin } from '../../../features/model/slices/accessSlice.ts';
import { useForm } from 'react-hook-form';
import { IoClose } from "react-icons/io5";
import { InputsType } from '../../../shared/types.ts';
import './login.scss';


export const Login: React.FC = ()=>{

  const isLogin = useSelector<RootState>(state=>state.access.isLogin);
  const dispatch = useAppDispatch();
  const handleClick = (e)=>{
    e.stopPropagation();
    if(e.target.className === e.currentTarget.className){
        dispatch(setLogin());
    }
  }

    const {
    register,
    handleSubmit,
    reset,
    formState: {
        errors
    }
  } = useForm<InputsType>({mode: 'onBlur'});

  const checkboxRef = React.useRef<HTMLInputElement>(null);


  const onSubmitForm = (data)=>{
    dispatch(setCheckbox(checkboxRef.current?.checked));
    dispatch(getAccess({url: 'http://localhost:8000/login', data: {...data}}));
    reset({
        email: '',
        password: ''
    })
  }

  return (
    <div className='popupLogin' style={{display: `${isLogin? 'flex': 'none'}`}} onClick={(e)=>handleClick(e)}>
        <form className="loginForm" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="container">
                <header className="login__header">
                    <legend className='login__header_title'>Sign in</legend>
                    <p className='login__header_text'>Sign in to your account using email and password provided during registration.</p>
                </header>

                <div className="loginForm__body">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input
                            type="email"
                            className='input'
                            id='email'

                            {...register('email', {
                                required: {
                                    message: 'введите email',
                                    value: true
                                },
                                minLength: {
                                    message: 'введите не менее 10-ти символов',
                                    value: 10
                                },

                                pattern: {
                                    message: 'напишите правильно email',
                                    value: /^[^]+@[^]+\.[a-z]{2,5}$/
                                }
                            })}
                            style={errors.email && {border: '1px solid red'}}
                            placeholder='Your working email'
                        />
                        <span className='form__error'>{errors.email && errors.email.message}</span>
                    </label>

                    <label htmlFor="password">
                        <p>Password</p>
                        <input
                            type="password"
                            className='input'
                            id='password'                           

                            {...register('password', {
                                required: {
                                    message: 'введите пароль',
                                    value: true
                                },
                                minLength: {
                                    message: 'введите не менее 6-ти символов',
                                    value: 6
                                }
                            })}
                            style={errors.password && {border: '1px solid red'}} 
                            placeholder='password'                       
                        />
                        <span className='form__error'>{errors.password && errors.password.message}</span>
                    </label>

                    <div className="checkbox">
                        <label htmlFor="checkbox">
                            <input type="checkbox" ref={checkboxRef} id='checkbox' name='checkbox'/>
                            <p>Keep me signed in</p>
                        </label>
                        <p className='fpswd'>Forgot password?</p>
                    </div>

                    <div className="loginForm__btn">
                        <Button 
                            text='Sign in'
                            className='btn-type-1'
                            width='390px'
                        />
                    </div>

                </div>
                <IoClose style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'red',
                        color: '#fff',
                        borderRadius: '5px'
                    }}
                    onClick={()=>dispatch(setLogin())}
                />
            </div>
        </form>
    </div>
  )
}
