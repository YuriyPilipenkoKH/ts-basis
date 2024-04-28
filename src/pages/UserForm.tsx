import { zodResolver } from '@hookform/resolvers/zod'
import  { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema, userSchemaType } from '../models/userSchema'
import {   ToMain } from './Pages.styled'
import s from './Pages.module.scss'

function UserForm() {
    const [logError, setLogError] = useState<string>('')
    const [phoneError, setPhoneError] = useState<string>('')
    const [isFirstNamelValid, setIsFirstNameValid] = useState<boolean>(false);
    const [isLastNamelValid, setIsLastNameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
    const {
        register, 
        handleSubmit,
        formState,
        reset,
        getValues,
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
    const handleGetValue = () => {
        const values = getValues(); // Call getValues to retrieve form values
        // console.log('Form values:', values);
        if (values.firstName && !errors.firstName) {
            setIsFirstNameValid(true)
        }
        if (values.lastName && !errors.lastName) {
            setIsLastNameValid(true)
        }
        if (values.email && !errors.email) {
            setIsEmailValid(true)
        }
        if (values.phone && !errors.phone) {
            setIsPhoneValid(true)
        }
    };
    useEffect(() => {
        handleGetValue()
    }, [])

  return (
    <>
    <ToMain to="/">Home</ToMain>
        <div className='w-[500px] mx-[auto]'>
        <form
            className={s.StUserForm}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            noValidate>
                <label >  <div>First Name</div >
                    <input
                    className={s.FormInput}
                     {...register('firstName')}
                    type="text" />
                </label>
                <label > <div>Last Name</div>
                    <input
                    className={s.FormInput}
                     {...register('lastName')}
                    type="text" />
                </label>
                <label > <div>Birthday</div>
                    <input
                    className={s.FormInput}
                     {...register('birthday')}
                    type="date" />
                </label>
                <label > <div>Email</div>
                    <input
                    className={s.FormInput}
                     {...register('email')}
                    type="text" />
                </label>
                <label > <div>Phone</div>
                    <input
                    className={s.FormInput}
                     {...register('phone')}
                    type="text" />
                </label>
                <div className='h-[40px] px-4 col-start-2'>
                {( errors?.firstName || errors?.lastName || errors?.email || errors?.phone ) && (
                <div className={s.AuthError}>
                {errors.firstName && <div>{errors?.firstName.message}</div>}
                {!errors.firstName && errors.lastName && <div>{errors?.lastName.message}</div>}
                {!errors.firstName && !errors.lastName && errors.email && <div>{errors?.email.message}</div>}
                {!errors.firstName && !errors.lastName && !errors.email && errors.phone && <div>{errors?.phone.message}</div>}
                </div>
            )}   
                </div>
                <button
                type="submit"
                disabled={!isDirty || !isValid || isSubmitting}
                className={s.btn}>submit</button>
        </form>
        </div>
    </>
  )
}

export default UserForm
