import { z } from "zod"
import { emailAvailable } from "../lib/emailAvailable";

export const ValidationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'Name must be 3 or more characters long')
        .max( 32, 'NAme should be shorter than 32 characters')
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