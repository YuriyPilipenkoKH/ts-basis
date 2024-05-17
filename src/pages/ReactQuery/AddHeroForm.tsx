import React from 'react'
import { useForm } from 'react-hook-form'
import { AddHeroSchema, AddHeroSchemaType } from '../../models/AddHeroSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthError, FormInput, FormLabel, Form_AddNew } from '../../components/RQ/FormStyles.styled'
import { cn } from '../../lib/utils'

function AddHeroForm() {
    const {
        register, 
        handleSubmit,
        formState,
        reset,
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

    const onSubmit = async (data: AddHeroSchemaType) => {}
  return (
    <>
    <Form_AddNew
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        noValidate>
        <FormLabel >
          Name
            <FormInput 
            {...register('name')}
            type="text"
            className={cn('w-64' )}
            placeholder="name"
            />         
        </FormLabel>
        <div className='flex gap-4'>
            <FormLabel >
              AlterEgo
                <FormInput
                {...register('alterEgo')}
                className={cn('input' )}
                type="text"
                placeholder="alterEgo"
                    />
            </FormLabel>

        </div>
           <div>
               {( errors?.name || errors?.alterEgo  ) && (
                  <AuthError className="autherror">
                    {errors.name && <div>{errors?.name.message}</div>}
                    {!errors.name && errors.alterEgo && <div>{errors?.alterEgo.message}</div>}
                   
                  </AuthError>
                )}
                {/* {logError && <AuthError className="autherror">{logError}</AuthError>} */}
           </div>
          <button
          className='contact-create w-[80px] h-[36px] rounded-md absolute bottom-[-34px]'
          disabled={isSubmitting || !isDirty || !isValid}
          type="submit"  
          >
           {( isSubmitting ) 
            ? "Process" 
            : "Send" }
           </button>
    </Form_AddNew>
    </>
  )
}

export default AddHeroForm