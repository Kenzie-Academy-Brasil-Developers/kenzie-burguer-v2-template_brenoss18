import {useContext} from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer} from 'react-toastify';
import Input from '../Input';
import { StyledForm } from '../../../styles/form';
import { StyledButton } from '../../../styles/button';
import {UserContext, IUserRegister} from '../../../contexts/UseContext/UseContext'

const RegisterForm = () => {

  const {UserRegister} = useContext(UserContext)

  const validatorRegister = yup.object({
    name : yup.string().required('nome obrigátorio'),
    email : yup.string().required('email obrigátorio'),
    password : yup.string().required('digite uma senha').matches(/(\d)/, 'Deve conter no mínimo 6 números'),
        }).required()

  const {register, handleSubmit, formState:{errors} } = useForm<IUserRegister>({
      resolver: yupResolver(validatorRegister)
  })

    return (
          <StyledForm onSubmit={handleSubmit(UserRegister)}>
            <Input type='text' label='nome' {...register('name')}/>
            <Input type='email' label='email' {...register('email')}/>
            <Input type='password' placeholder='senha' {...register('password')}/>
            <Input type='password' placeholder='confirmar senha '/>
              <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
                Cadastrar
              </StyledButton>
                <ToastContainer/>
          </StyledForm>
    )
  
};

export default RegisterForm;
