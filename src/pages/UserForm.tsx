import { zodResolver } from '@hookform/resolvers/zod'
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema, userSchemaType } from '../models/userSchema'

function UserForm() {
    const [logError, setLogError] = useState<string>('')
    const [phoneError, setPhoneError] = useState<string>('')
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
  return (
    <>
    <form
        className='flex flex-col gap-2'
        autoComplete="off"
        noValidate>
            <label > First Name
                <input 
                 {...register('firstName')}
                type="text" />
            </label>
            <label > Last Name
                <input 
                 {...register('lastName')}
                type="text" />
            </label>
            <label > Birthday
                <input 
                 {...register('birthday')}
                type="date" />
            </label>
            <label > Email
                <input 
                 {...register('email')}
                type="text" />
            </label>
            <label > Phone
                <input 
                 {...register('phone')}
                type="text" />
            </label>

    </form>
    </>
  )
}

export default UserForm
