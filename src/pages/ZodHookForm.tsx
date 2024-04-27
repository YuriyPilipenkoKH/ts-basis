import { useForm } from "react-hook-form"
import { Container } from "../components/Container/Container"
import { FormInput, ValidationSchema } from "../models/auth"
import { ErrorWrap, Field, HookedForm,  Label, ToMain } from "./Pages.styled"
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";

const ZodHookForm = () => {
    const [isNamelValid, setIsNameValid] = useState<boolean>(false);
    const [isEmaillValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordlValid, setIsPasswordValid] = useState<boolean>(false);
    const {
        register, 
        handleSubmit,
        getValues,
        formState,
        reset,
    } = useForm<FormInput>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode:'all',
        resolver: zodResolver(ValidationSchema),
    })
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitSuccessful,
        isSubmitting,

    } = formState
    
    // console.log('isValid',isValid, 'errors.name', errors.name)

    const onSubmit = (data:{}) => {
        console.log('Form submited',data)
        setIsNameValid(false)
        setIsEmailValid(false)
        setIsPasswordValid(false)
        
    };

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])


    const handleGetValue = () => {
        const values = getValues(); // Call getValues to retrieve form values
        // console.log('Form values:', values);
        if (values.name && !errors.name) {
            setIsNameValid(true)
        }
        if (values.email && !errors.email) {
            setIsEmailValid(true)
        }
        if (values.password && !errors.password) {
            setIsPasswordValid(true)
        }
    };


  return (
    <Container>
    <ToMain to="/">Home</ToMain>
    
    <HookedForm 
        onSubmit={handleSubmit(onSubmit)}   
        autoComplete="off"
        noValidate >
        <Label> Name
        <Field
            {...register('name', 
                {onChange: () => handleGetValue()}
            )}
            validated = { isNamelValid }
            error = { !!errors.name  }
            type="text" />
        {errors?.name && (
        <ErrorWrap>{errors.name.message}</ErrorWrap>
            )}    
        </Label>
        <Label> Email
            <Field
            {...register('email',
            {onChange: () => handleGetValue()}
            )}
            validated = { isEmaillValid }
            error = { !!errors.email  }
            />
            {errors?.email && (
            <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}   
        </Label>
        <Label> Password
            <Field
            {...register('password',
            {onChange: () => handleGetValue()}
            )}
            validated = { isPasswordlValid }
            error = { !!errors.password  }
            />
            {errors?.password && (
            <ErrorWrap>{errors.password.message}</ErrorWrap>
                )}   
        </Label>

        <Button 
            type="submit" 
            disabled={!isDirty || !isValid || isSubmitting}
            className='sub'>submit</Button>

      </HookedForm>

    </Container>
  )
}

export default ZodHookForm
