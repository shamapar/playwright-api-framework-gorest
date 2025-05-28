import { z } from "zod/v4";

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.email(),
    gender: z.string(),
    status: z.string()
});
export const usersListSchema = z.array(userSchema);