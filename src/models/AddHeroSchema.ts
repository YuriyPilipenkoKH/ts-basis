import { z } from 'zod';

export const AddHeroSchema= z.object({
    
    name: z
        .string()
        .min(3, 'Name should be at least 3 characters long')
        .regex(/^[a-zA-Z]+$|^[0-9]+$|^[\w\s]+$|^[\w\s_]+$/, { 
            message: "Use letters, numbers & underscore" 
        }),
    alterEgo: z
        .string()
        .min(3, 'alterEgo should be at least 3 characters long')
        .regex(/^[a-zA-Z]+$|^[0-9]+$|^[\w\s]+$|^[\w\s_]+$/, { 
            message: "Use letters, numbers & underscore" 
        }),
})

export type AddHeroSchemaType = z.infer<typeof AddHeroSchema>

