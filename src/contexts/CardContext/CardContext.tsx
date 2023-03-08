import { createContext, ReactNode, useState} from "react";
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
    products : Iproduct[]
    setProducts : React.Dispatch<React.SetStateAction<Iproduct[]>>
}  

export const CardProvider = ({children}:IProviderChildren) => {

    const [cardModal, setCardModal] = useState(false)

    const [products, setProducts] = useState([] as Iproduct[])


    

    return (
        <CardContext.Provider value={{cardModal, setCardModal, products, setProducts}}>
            {children}
        </CardContext.Provider>
        )
}
