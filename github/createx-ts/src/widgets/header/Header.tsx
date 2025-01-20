import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from './ui/navbar/Navbar.tsx';
import { Button } from '../../shared/components/index.ts';
import { useLocation } from 'react-router-dom';
import { clearUser, getUser, setLogin, setRegister } from '../../features/model/slices/accessSlice.ts';
import { RootState, useAppDispatch } from '../../app/stories/store.ts';
import { PiUserCircleLight } from "react-icons/pi";
import { UserType } from '../../shared/types.ts';
import logo from '../../shared/assets/icons/logo.svg';
import profile from '../../shared/assets/icons/Profile.svg';
import './header.css';
import { useSelector } from 'react-redux';

export const Header: React.FC = ()=>{
  const location = useLocation();
  const dispatch = useAppDispatch();

  const user = useSelector<RootState, UserType>(state=>state.access.user);

  React.useEffect(()=>{
    dispatch(getUser());
  }, [dispatch])

  console.log('header');

  return (
    <header className="header" style={{position: location.pathname === '/' 
                                        || location.pathname === '/Events/7' ? 'absolute': 'static', zIndex: 100}}>
        <div className="container">
            <div className="header-wrapper">
              <Link to={'/'}>
                <img src={logo} alt="logo" className='header__logo'/>
              </Link>
              <nav className="header__nav">
                <Navbar />
              </nav>
              <div className="header__access">
                <Button text='Get consultation' className='btn-type-1' width='215px'/>

                <div className="header__access_profile">
                  {
                    user.user.email === '' ? <img src={profile} className="profile__logo" alt="profile" />
                    : <div className="exit">
                      <PiUserCircleLight size={36} onClick={()=>{
                        localStorage.clear();
                        sessionStorage.clear();
                        dispatch(clearUser());
                      }}/>
                      <p>Go out</p>
                    </div>
                  }
                  <Link to={''} onClick={()=>dispatch(setLogin())} style={{width: '45px'}}>Log In</Link>
                  <span>/</span>
                  <Link to={''} onClick={()=>dispatch(setRegister())}>Register</Link>
                </div>                
              </div>
            </div>
        </div>
    </header>
  )
}
