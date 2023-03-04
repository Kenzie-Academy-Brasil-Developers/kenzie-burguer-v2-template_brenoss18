/* eslint-disable import/no-extraneous-dependencies */
import { createContext, ReactNode, useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import { api } from "../../services/api";

export const UserContext = createContext< IUserContextValue >({} as IUserContextValue)



interface IProviderChildren {
    children: ReactNode 
}

export interface IUserRegister {
    email : string
    password : number | string
    name : string
}
export interface IUserLogin {
    email : string
    password : number | string
}

interface IUserContextValue {
    UserRegister: (data: IUserRegister) => Promise<void>;
    UserLogin : (data : IUserLogin) => Promise<void> 
    user : IUser | null
}

interface IUser {
    email : string
    id : number
    name : string

}


export const Provider = ({children}:IProviderChildren) => {

    const navigate = useNavigate()

    const [user, setUser] = useState<IUser| null>(null)

    const UserRegister = async (data : IUserRegister) => {
        try {
            await api.post('/users', data)
            toast('Cadastro Feito com sucesso')
            navigate('/')
           
        } catch (error) {
            console.log(error)
            toast('Ops, algo deu errado')
        }
    }

    const UserLogin = async (data : IUserLogin) => {
        try {
           const response = await api.post('/login', data)
            toast('Login Feito com sucesso')
            navigate('/shop')
            localStorage.setItem('user', response.data.accessToken)
            setUser(response.data.user)
        } catch (error) {
            console.log(error)
            toast('Ops, algo deu errado')
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem('user')
        if (token){
            const userAutoLogin = async () => {
                try {
                    const response = await api.get('/products', {
                        headers : {
                            Authorization: `Bearer ${token}`
                        }
                    })
                        setUser(response.data)
                        navigate('/shop')
                        
                } catch (error) {
                    console.log(error)
                }
            }
            userAutoLogin()
        }
        
    }, [])



    return (
        <UserContext.Provider value={{UserRegister, UserLogin, user}}>
            {children}
        </UserContext.Provider>
        )
}
