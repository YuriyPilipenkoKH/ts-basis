import { zodResolver } from '@hookform/resolvers/zod'
import  { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema, userSchemaType } from '../models/userSchema'
import {   ToMain } from './Pages.styled'
import s from './Pages.module.scss'
import { cn } from '../lib/utils'
import { CiSquareChevDown } from "react-icons/ci";
import { FaCaretSquareDown } from "react-icons/fa";
import { Dropdown, MenuProps } from 'antd';



function UserForm() {
    // const [logError, setLogError] = useState<string>('')
    // const [phoneError, setPhoneError] = useState<string>('')
    const [isFirstNamelValid, setIsFirstNameValid] = useState<boolean>(false);
    const [isLastNamelValid, setIsLastNameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);
    const [isBirthdayValid, setIsBirthdayValid] = useState<boolean>(false);
    const [isRoleValid, setIsRoleValid] = useState<boolean>(false);
    const {
        register, 
        handleSubmit,
        formState,
        reset,
        getValues,
        setValue,
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
        isSubmitSuccessful
    } = formState

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <button
            // className={cn('',
            // isDopAvailable && 'text-orange-600'
            // )}
            type='button'
            onClick={()=>{ 
                setValue('role', 'editor')
                handleGetValue()
            }}
            >
             editor
            </button>
          ),
        },
    
        {
          key: '3',
          label: (
            <button type='button'
            onClick={()=> {
                setValue('role', 'viewer')
                handleGetValue()
            }}
            >
            viewer
            </button>
          ),
        },

      ];

    console.log('isDirty',isDirty, 'isValid', isValid,'isSubmitting', isSubmitting)

    const onSubmit = async (data: userSchemaType) => {
        console.log('data' , data)
        setIsFirstNameValid(false)
        setIsLastNameValid(false)
        setIsEmailValid(false)
        setIsPhoneValid(false)
        setIsBirthdayValid(false)
        setIsRoleValid(false)

    }
    const handleGetValue = () => {
        const values = getValues(); // Call getValues to retrieve form values
        console.log('Form values:', values);

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
        if (values.birthday && !errors.birthday) {
            setIsBirthdayValid(true)
        }
        if (values.role && !errors.role) {
            setIsRoleValid(true)
        }
    };
    const changeBirthdayFormat =(e: ChangeEvent<HTMLInputElement>) => {
        const formatedBirthday  = new Date(Date.parse(e.target.value));
        console.log('formatedBirthday ',formatedBirthday )
        // setValue('birthday', formatedBirthday)
    }
    
    useEffect(() => {
        handleGetValue()
    }, [])
    
    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful])
    
  return (
    <>
    <ToMain to="/">Home</ToMain>
        <div className='w-[500px] mx-[auto]'>
        <form
            className={s.StUserForm}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            noValidate>
                <label >  
                    <div 
                    className={cn(!!errors.firstName ? s.lab_err : s.lab_def)}>
                        First Name
                    </div >
                    <input
                    className={cn(s.FormInput, 
                        !isFirstNamelValid ? s.def : !!errors.firstName ?  s.err : s.val,
                    )}
                     {...register('firstName', 
                     {onChange: () => handleGetValue()}
                     )}
                    type="text" />
                </label>
                <label > 
                    <div 
                    className={cn(!!errors.lastName ? s.lab_err : s.lab_def)}>
                        Last Name
                    </div >
                    <input
                    className={cn(s.FormInput, 
                        !isLastNamelValid ? s.def : !!errors.lastName ?  s.err : s.val,
                    )}
                     {...register('lastName',
                     {onChange: () => handleGetValue()}
                     )}
                    type="text" />
                </label>

                <label > 
                <div 
                    className={cn(!!errors.email ? s.lab_err : s.lab_def)}>
                       Email
                    </div >
                    <input
                    className={cn(s.FormInput, 
                        !isEmailValid ? s.def : !!errors.email ?  s.err : s.val,
                    )}
                     {...register('email',
                     {onChange: () => handleGetValue()}
                     )}
                    type="text" />
                </label>
                <label > 
                <div 
                    className={cn(!!errors.phone ? s.lab_err : s.lab_def)}>
                        Phone
                    </div >
                    <input
                    className={cn(s.FormInput, 
                        !isPhoneValid ? s.def : !!errors.phone ?  s.err : s.val,
                    )}
                     {...register('phone',
                     {onChange: () => handleGetValue()}
                     )}
                    type="text" />
                </label>
                <label > 
                    <div 
                    className={cn(!!errors.birthday ? s.lab_err : s.lab_def)}>
                        Birthday
                    </div >
                    <input
                    className={cn(s.FormInput, 
                        !isBirthdayValid ? s.def : !!errors.birthday ?  s.err : s.val,
                    )}
                     {...register('birthday',
                     {onChange: (e) =>{ 
                        changeBirthdayFormat(e)
                        handleGetValue()
                    }}
                     )}
                    type="date" />
                </label>
                <label className='relative'> 
                    <div 
                    className={cn(!!errors.role ? s.lab_err : s.lab_def)}>
                        Role
                    </div >
                    <input
                    className={cn(s.FormInput, 
                        !isRoleValid ? s.def : !!errors.role ?  s.err : s.val,
                    )}
                     {...register('role',
                     {onChange: () =>{ 
                        console.log('role chenged')
                         handleGetValue()
                    }}
                     )}
                    type="text" />
                <Dropdown 
                menu={{ items }} 
                placement="bottomRight">
                    <button 
                    className='absolute right-6 top-2'
                    type='button'>
                        <CiSquareChevDown  size={25} />
                    </button>
                </Dropdown>

                </label>
                <div className='h-[40px] px-4 col-start-2'>
                {( errors?.firstName || errors?.lastName || errors?.email || errors?.phone || errors?.birthday || errors?.role ) && (
                    <div className={s.AuthError}>
                    {errors.firstName && <div>{errors?.firstName.message}</div>}
                    {!errors.firstName && errors.lastName && <div>{errors?.lastName.message}</div>}
                    {!errors.firstName && !errors.lastName && errors.email && <div>{errors?.email.message}</div>}
                    {!errors.firstName && !errors.lastName && !errors.email && errors.phone && <div>{errors?.phone.message}</div>}
                    {!errors.firstName && !errors.lastName && !errors.email && !errors.phone &&  errors.birthday && <div>{errors?.birthday.message}</div>}
                    {!errors.firstName && !errors.lastName && !errors.email && !errors.phone &&  !errors.birthday && errors.role && <div>{errors?.role.message}</div>}
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
