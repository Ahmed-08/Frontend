import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Context from '../js/Context';
//export const Context = React.createContext();

export default function Root() {
    
  //const [isOpenMenu, setOpenMenu] = React.useState(false);

  return (
    <Context>
        <Header />
        <Outlet />
        <Footer />
    </Context>
  )
}
