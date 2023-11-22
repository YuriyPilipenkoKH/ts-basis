import { z } from "zod"
import { Container } from "../components/Container/Container"
import { fromZodError } from "zod-validation-error"
import { ToMain } from "./Pages.styled"



const UserSchema = z.object({
    id: z.union([z.string(), z.number()]),
    name: z.string().min(
        3, 'Min length must be 3'
    ).max(
        32, 'name should be shorter than 32 characters'
    ),
    email: z
        .string()
        .email('email is not valid')
        .refine((val) => !val.endsWith('.ru'), {
            message: 'Domain is not supported',
          }),
    age: z.number().gt(0),
    dob: z.date().optional(),
    isProgrammer: z.boolean().default(true).optional(),
    hobby: z.enum(['coding', 'driving']),
    friends: z.array(z.string().nonempty())
})
type User = z.infer<typeof UserSchema>

const user : User = { 
    id: 3,
    name: 'Bant',
    age: 20,
    email: 'bant@mail.com',
    dob: new Date(),
    isProgrammer: true,
    hobby: 'coding',
    friends: ['Martin']
}

// const brandEmail = z
//     .string()
//     .email()
//     .refine(val => val.endsWith(".ru"), {
//         message: 'Domain is not suported'
//     })

// console.log(UserSchema.safeParse(user).success)

const results = UserSchema.safeParse(user)
if(!results.success) {
    console.log(fromZodError(results.error))
}
 
const Zod = () => {
  return (
    <Container>
        <ToMain to="/">Home</ToMain>
      zodd
   
    </Container>
  )
}

export default Zod
