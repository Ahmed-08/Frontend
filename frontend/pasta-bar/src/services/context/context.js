import React, { createContext, useState } from "react";

export const context = createContext();

const Context = (props)=>{

    const [user, setUser] = useState({
        email: ''
    });

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [products, setProducts] = useState([]);
    
    React.useEffect(()=>{
        fetch('http://localhost:8000/products')
        .then(respons=>respons.json())
        .then(data=>{
          setProducts(data);
        })

        if(localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')));
        }

    }, []);


    const loginUser = (data)=>{

        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers:  {'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Error')
            }
            return response.json();
        })
        .then(data=>{
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
        })
        .catch(console.log);
        setLogin(false);
    }


    const registerUser = (data)=>{

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers:  {'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Error')
            }
            return response.json();
        })
        .then(data=>{
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            setRegister(false);
        })
    }
    
    const value = {
        products,
        setProducts,
        login,
        setLogin,
        register,
        setRegister,
        registerUser,
        loginUser,
        user,
        setUser,
    }
    return <context.Provider value={value}>
        {props.children}
    </context.Provider>
}

export default Context;