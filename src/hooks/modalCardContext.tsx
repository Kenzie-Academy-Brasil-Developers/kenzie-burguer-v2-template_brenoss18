import { useContext } from "react"
import { CardContext } from "../contexts/CardContext/CardContext"

export const modalCardContext = ()=> {
    const modalContext = useContext(CardContext)

    if (!modalContext){
        console.log('contexto não encontrado')
    }
    return modalContext
}