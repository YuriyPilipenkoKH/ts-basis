import { useForm } from 'react-hook-form'
import { AddHeroSchema, AddHeroSchemaType } from '../../models/AddHeroSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthError, FormAddNew, FormInput, FormLabel} from '../../components/RQ/FormStyles.styled'
import { cn } from '../../lib/utils'

interface AddHeroFormProps {
    addHero: any
}

function AddHeroForm({addHero}: AddHeroFormProps) {
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

    const onSubmit = async (data: AddHeroSchemaType) => {
        console.log(data)
        addHero(data)
    }
  return (
    <>
    <FormAddNew
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

            <FormLabel >
              AlterEgo
                <FormInput
                {...register('alterEgo')}
                className={cn('input' )}
                type="text"
                placeholder="alterEgo"
                    />
            </FormLabel>

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
          className=' w-[80px] h-[36px] rounded-md text-slate-300 mx-auto'
          disabled={isSubmitting || !isDirty || !isValid}
          type="submit"  
          >
           { isSubmitting ? "Process" : "Add Hero" }
           </button>
    </FormAddNew>
    </>
  )
}

export default AddHeroForm