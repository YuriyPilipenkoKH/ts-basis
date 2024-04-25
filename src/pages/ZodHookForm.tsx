import { useForm } from "react-hook-form"
import { Container } from "../components/Container/Container"
import { FormInput, ValidationSchema } from "../models/auth"
import { ErrorWrap, HookedForm, Input, Label, ToMain } from "./Pages.styled"
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";
import { Button } from "../components/Button/Button";

const ZodHookForm = () => {
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
    
    console.log('isValid',isValid, 'isDirty',isDirty)

    const onSubmit = (data:{}) => {
        console.log('Form submited',data)
        
    };

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])
    useEffect(() => {
        handleGetValue()
    }, [errors])

    const handleGetValue = () => {
        const values = getValues(); // Call getValues to retrieve form values
        console.log('Form values:', values);
    };
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
            isDirty={isDirty as boolean | undefined}
            errors={errors?.name as boolean | undefined} 
            />
            {errors?.name && (
            <ErrorWrap>{errors.name.message}</ErrorWrap>
                )}    
        </Label>
        <Label> Email
            <Input
            {...register('email')}
            isDirty={isDirty as boolean | undefined}
            errors={errors?.email as boolean | undefined}
            />
            {errors?.email && (
            <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}   
        </Label>
        <Label> Password
            <Input
            {...register('password')}
            isDirty={isDirty as boolean | undefined}
            errors={errors?.password as boolean | undefined} 
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
