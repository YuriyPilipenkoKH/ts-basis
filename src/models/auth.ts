import { z } from "zod"

const ValidationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'Name must be 3 or more characters long')
        .max( 32, 'NAme should be shorter than 32 characters')
        .refine((val) => val.toLowerCase().startsWith('qwe'), {
            message: 'Enter a different name'
          }),
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
        .refine((val) => val.toLowerCase().startsWith('admin'), {
            message: 'Enter a different email address'
          })  
        .refine((val) => !val.endsWith('.ru'), {
            message: 'Domain is not supported'
          }),
    password: z
        .string()      
})