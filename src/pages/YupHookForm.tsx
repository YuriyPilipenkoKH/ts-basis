import { Container } from "../components/Container/Container"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorWrap, HookedForm, Input, Label, ToMain } from "./Pages.styled";
import { Button } from "../components/Button/Button";
import { useEffect } from "react";

const validationSchema = yup.object({
    name: yup
    .string()
    .required('Missing username'),
    email: yup
    .string()
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        'Email is not valid')
    .test('not-blacklisted', 
        'This domain is not supported', 
         (value) => {
          return !value.endsWith('.ru');
         }),
    password: yup
    .string()
    .required('Password is required')
    .min(6, 'Minimum 6 characters'),
})

const YupHookForm = () => {

    const {
        register, 
        handleSubmit,
        formState,
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode:'all',
        resolver: yupResolver(validationSchema ),
    })
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitSuccessful,
    } = formState
    
    const onSubmit = (data:{}) => {
        console.log('Form submited',data)
        
    };

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    

  return (
    <Container>
        <ToMain to="/">Home</ToMain>
      <HookedForm 
        onSubmit={handleSubmit(onSubmit)}   
        autoComplete="off"
        noValidate >
        <Label> Name
            <Input
            {...register('name')}
            errors={errors?.name as boolean | undefined} 
            />
            {errors?.name && (
            <ErrorWrap>{errors.name.message}</ErrorWrap>
                )}    
        </Label>
        <Label> Email
            <Input
            {...register('email')}
            errors={errors?.email as boolean | undefined}
            />
            {errors?.email && (
            <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}   
        </Label>
        <Label> Password
            <Input
            {...register('password')}
            errors={errors?.password as boolean | undefined} 
            />
            {errors?.password && (
            <ErrorWrap>{errors.password.message}</ErrorWrap>
                )}   
        </Label>

        <Button 
            type="submit" 
            disabled={!isDirty || !isValid}
            className='sub'>submit</Button>
      </HookedForm>
    </Container>
  )
}

export default YupHookForm
