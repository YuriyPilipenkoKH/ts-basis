import { z } from "zod"
import { Container } from "../components/Container/Container"



const UserSchema = z.object({
    name: z.string().min(2).max(32),
    age: z.number().gt(0),
    dob: z.date().optional(),
    isProgrammer: z.boolean().default(true).optional(),
    hobby: z.enum(['coding', 'driving'])
})
type User = z.infer<typeof UserSchema>

const user : User = { 
    name: 'Bant',
    age: 20,
    dob: new Date(),
    isProgrammer: true,
    hobby: 'coding'
}

console.log(UserSchema.safeParse(user).success)
 
const Zod = () => {
  return (
    <Container>
      zodd
   
    </Container>
  )
}

export default Zod
