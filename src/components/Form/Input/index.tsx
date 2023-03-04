import {forwardRef, InputHTMLAttributes} from 'react'
import { DivInput } from './style';


interface Iinput extends InputHTMLAttributes<HTMLInputElement>{
  label? : string,
  type: string,
  placeholder? : string 
}

const Input = forwardRef<HTMLInputElement, Iinput>(({label, type, placeholder, ...rest}, ref) =>  {
  const a = 1

    return (
      <DivInput>
      <label>{label}</label>
      <input type={type} placeholder = {placeholder} ref={ref} {...rest}/>
      </DivInput>
      )
})

export default Input;
