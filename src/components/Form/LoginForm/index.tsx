import {useContext} from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form'
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import {UserContext, IUserLogin} from '../../../contexts/UseContext/UseContext'

const LoginForm = () => {

  const {UserLogin} = useContext(UserContext)

  const validatorLogin = yup.object({
    email : yup.string().required('email obrigátorio'),
    password : yup.string().required('digite uma senha').matches(/(\d)/, 'Deve conter no mínimo 6 números'),
        }).required()

  const {register, handleSubmit, formState:{errors} } = useForm<IUserLogin>({
      resolver: yupResolver(validatorLogin)
  })

  return (
  <StyledForm onSubmit={handleSubmit(UserLogin)}>
    <Input type='text' {...register('email')}/>
    <Input type='password' {...register('password')}/>
    <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>
    )
};

export default LoginForm;
