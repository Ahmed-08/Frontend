import React from 'react';
import { Button } from '../../../shared/components/index.ts';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../app/stories/store.ts';
import { getAccess, setCheckbox, setRegister } from '../../../features/model/slices/accessSlice.ts';
import { useForm } from 'react-hook-form';
import { IoClose } from "react-icons/io5";
import { InputsType } from '../../../shared/types.ts';
import './register.scss';


export const Register: React.FC = ()=>{

  const isRegister = useSelector<RootState>(state=>state.access.isRegister);
  const dispatch = useAppDispatch();
  const handleClick = (e)=>{
    e.stopPropagation();
    if(e.target.className === e.currentTarget.className){
        dispatch(setRegister());
    }
  }

  const checkboxRef = React.useRef<HTMLInputElement>(null);

    const {
    register,
    handleSubmit,
    formState: {
        errors
    }
  } = useForm<InputsType>({mode: 'onBlur'});

  const onSubmitForm = (data)=>{
    dispatch(setCheckbox(checkboxRef.current?.checked));
    dispatch(getAccess({url: 'http://localhost:8000/register', data: {...data}}));
  }

  return (
    <div className='popupRegister' style={{display: `${isRegister? 'flex': 'none'}`}} onClick={(e)=>handleClick(e)}>
        <form className="registerForm" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="container">
                <header className="registerForm__header">
                    <legend className='registerForm__header_title'>Sign up</legend>
                    <p className='registerForm__header_text'>Registration takes less than a minute but gives you full control over your studying.</p>
                </header>

                <div className="registerForm__body">

                    <label htmlFor="fullName">
                        <p>Full Name</p>
                        <input
                            type="text"
                            className='input'
                            id='FullName'

                            {...register('fullName', {
                                required: {
                                    message: 'введите имя',
                                    value: true
                                },
                                minLength: {
                                    message: 'введите не менее 6-ти символов',
                                    value: 6
                                }
                            })}
                            style={errors.fullName && {border: '1px solid red'}}
                            placeholder='Your full name'
                        />
                        <span className='form__error'>{errors.fullName && errors.fullName.message}</span>
                    </label>

                    <label htmlFor="register__email">
                        <p>Email</p>
                        <input
                            type="email"
                            className='input'
                            id='register__email'

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
                            id='register__password'                           

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

                    <div className="register__checkbox">
                        <label htmlFor="register__checkbox">
                            <input 
                                type="checkbox" 
                                id='register__checkbox'
                                ref={checkboxRef}
                            />
                            <p>Remember me</p>
                        </label>
                        <p className='fpswd'>Forgot password?</p>
                    </div>

                    <div className="registerForm__btn">
                        <Button text='Sign up' className='btn-type-1' width='390px'/>
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
                    onClick={()=>dispatch(setRegister())}
                />
            </div>
        </form>
    </div>
  )
}
