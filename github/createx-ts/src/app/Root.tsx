import React from 'react'
import { Outlet } from 'react-router-dom';
import {Header} from '../widgets/index.ts';
import { Footer } from '../widgets/index.ts';
import { Login, Register} from '../widgets/index.ts';

export const Root:React.FC = ()=>{
  return (
    <>
      <Login />
      <Register />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
