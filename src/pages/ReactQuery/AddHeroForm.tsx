import React from 'react'
import { useForm } from 'react-hook-form'
import { AddHeroSchema, AddHeroSchemaType } from '../../models/AddHeroSchema'
import { zodResolver } from '@hookform/resolvers/zod'

function AddHeroForm() {
    const {
        register, 
        handleSubmit,
        formState,
        reset,
        watch
    } = useForm<AddHeroSchemaType>({
        defaultValues: {
            name: '',
            alterEgo: '',
  
        },
            mode:'all',
            resolver: zodResolver(AddHeroSchema),
    })
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitting,
    } = formState
  return (
    <div>AddHeroForm</div>
  )
}

export default AddHeroForm