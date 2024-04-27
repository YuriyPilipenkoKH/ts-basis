import { zodResolver } from '@hookform/resolvers/zod'
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema, userSchemaType } from '../models/userSchema'
import {  FormInput,  StUserForm, ToMain } from './Pages.styled'
import { Button } from '../components/Button/Button'

function UserForm() {
    const [logError, setLogError] = useState<string>('')
    const [phoneError, setPhoneError] = useState<string>('')
    const [isFirstNamelValid, setIsFirstNameValid] = useState<boolean>(false);
    const [isLastNamelValid, setIsLastNameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPhoneValid, setIPhoneValid] = useState<boolean>(false);
    const {
        register, 
        handleSubmit,
        formState,
        reset,
        watch
    } = useForm<userSchemaType>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
            mode:'all',
            resolver: zodResolver(userSchema),
    })
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitting,
    } = formState

    const onSubmit = async (data: userSchemaType) => {
        console.log('data' , data)
    }
  return (
    <>
    <ToMain to="/">Home</ToMain>
        <div className='w-[500px] mx-[auto]'>
        <StUserForm
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            noValidate>
                <label >  <div>First Name</div >
                    <FormInput
                     {...register('firstName')}
                    type="text" />
                </label>
                <label > <div>Last Name</div>
                    <FormInput
                     {...register('lastName')}
                    type="text" />
                </label>
                <label > <div>Birthday</div>
                    <FormInput
                     {...register('birthday')}
                    type="date" />
                </label>
                <label > <div>Email</div>
                    <FormInput
                     {...register('email')}
                    type="text" />
                </label>
                <label > <div>Phone</div>
                    <FormInput
                     {...register('phone')}
                    type="text" />
                </label>
                <Button
                type="submit"
                disabled={!isDirty || !isValid || isSubmitting}
                className='sub  '>submit</Button>
        </StUserForm>
        </div>
    </>
  )
}

export default UserForm
