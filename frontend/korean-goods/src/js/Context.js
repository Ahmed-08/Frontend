import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CustomContext = createContext();

const Context = (props)=>{

    const navigate = useNavigate();

    const [isOpenMenu, setOpenMenu] = useState(false);

    const [user, setUser] = useState({
        email: ''
    });

    const [searchValue, setSearchValue] = useState('');

    const [products, setProducts] = useState([]);

    const [favourites, setFavourites] = useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:8000/products/?q=${searchValue}`)
            .then(res=>res.json())
            .then(data=>{
                setProducts(data);
            });
    },[searchValue]);

    React.useEffect(()=>{
        if(localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    },[]);

    const registerUser = (data)=>{

        fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Сетевая ошибка');
          }
          return response.json();
        })
        .then(data => {
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/');
        })
        .catch(error => console.error('Ошибка:', error));
        
    }

    const loginUser = (data)=>{

        fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Сетевая ошибка');
          }
          return response.json();
        })
        .then(data => {
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/');
        })
        .catch(error => console.error('Ошибка:', error));
    }

    const logOutUser = ()=>{
        localStorage.removeItem('user');
        setUser({
            email: ''
        })
        navigate('/');
    }
    
    const value = {
        user,
        registerUser,
        logOutUser,
        loginUser,
        isOpenMenu,
        setOpenMenu,
        searchValue,
        setSearchValue,
        products,
        setProducts,
        favourites,
        setFavourites
    };

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context;