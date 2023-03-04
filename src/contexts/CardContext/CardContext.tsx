import { createContext, ReactNode, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export const CardContext = createContext({} as IvalueContext)

interface IProviderChildren {
    children: ReactNode 
}

interface Iproduct {
    id : number
    name : string,
    img : string,
    category : string
    price : number
  }

interface IvalueContext {
    cardModal : boolean
    setCardModal : React.Dispatch<React.SetStateAction<boolean>>
    LogOut :() => void
    products : Iproduct[]
    setProducts : React.Dispatch<React.SetStateAction<Iproduct[]>>
}  

export const CardProvider = ({children}:IProviderChildren) => {

    const [cardModal, setCardModal] = useState(false)

    const [products, setProducts] = useState([] as Iproduct[])

    const navigate = useNavigate()

    const LogOut = ()=>{
        localStorage.removeItem('user')
        navigate('/')
        console.log('olá')
    }
    

    return (
        <CardContext.Provider value={{cardModal, setCardModal, LogOut, products, setProducts}}>
            {children}
        </CardContext.Provider>
        )
}
