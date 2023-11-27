import { z } from "zod"
import { emailAvailable } from "../lib/emailAvailable";




export const ValidationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'Name must be 3 or more characters long')
        .max( 32, 'Name should be shorter than 32 characters')
        .refine((val) => !val.toLowerCase().startsWith('qwe'), {
            message: 'Enter a different name'
          })
        .refine((val) => val.toLowerCase() !== 'admin', {
            message: 'Admin is not allowed'
          })  
          ,
    username: z
        .string().trim().toLowerCase()
        .min(4, 'Username must be 4 or more characters long')
        .refine((val) => val.toLowerCase() === 'jonny', {
            message: 'Jonny is not allowed'
          })
        .optional(),
    email: z
        .string()
        .email('email is not valid')
        .refine((val) => !val.toLowerCase().startsWith('admin'), {
            message: 'Enter a different email address'
          })  
        .refine((val) => !val.endsWith('.ru'), {
            message: 'Domain is not supported'
          })
        .refine(async (fieldValue) => {
            const result = await emailAvailable(fieldValue);
            return result === undefined;
        }, {
            message: 'Enter a different email address'
        })  
        ,
    password: z
        .string()
        .min(6, "Minimum 6 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$#&]*$/, { 
            message: "Include capital letters and numbers" 
        }),      
})

   export type FormInput = z.infer <typeof ValidationSchema >

   //=============================
//    const form: number[] =[2,14]
//     form.push(7)
//     form[12] = 12

//     const nuller =(ara:number[]) => {
//         // ara = [] //  does not work
//         ara.length = 0
//     }
   
// //   nuller(form)
//     console.log(form)
//     console.log(form[10])

//     const undell : readonly number[] = [22,1,44]
//     console.log(undell)

//     const cort01 : [string, number] = ["Bant", 4]
//     console.log(cort01)
