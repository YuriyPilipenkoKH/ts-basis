import { zodResolver } from '@hookform/resolvers/zod'
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema, userSchemaType } from '../models/userSchema'
import { Field, StUserForm } from './Pages.styled'

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
    <StUserForm
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        noValidate>
            <label >  <div>First Name</div>
                {/* <Field
                 {...register('firstName')}
                 validated ={!errors.firstName ? true : false}
                type="text" /> */}
            </label>
            <label > <div>Last Name</div>
                <input 
                 {...register('lastName')}
                type="text" />
            </label>
            <label > <div>Birthday</div>
                <input 
                 {...register('birthday')}
                type="date" />
            </label>
            <label > <div>Email</div>
                <input 
                 {...register('email')}
                type="text" />
            </label>
            <label > <div>Phone</div>
                <input 
                 {...register('phone')}
                type="text" />
            </label>

            <button type='submit'>submit</button>

    </StUserForm>
    </>
  )
}

export default UserForm
