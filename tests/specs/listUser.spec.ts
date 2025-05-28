import { test, expect } from '@playwright/test'
import { IUser } from '../customType/user.ts'
import { getApiRequest } from '../helper/actions.ts';
import { usersListSchema } from '../schema/schema.ts'

test('list of all users', async ({ request }) => {
    const response = await getApiRequest("/public/v2/users/", request);

    expect(response.status()).toEqual(200);
    const body: IUser[] = await response.json();

    body.forEach(user => {
        expect(user).toHaveProperty("id");
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("email");
        expect(user).toHaveProperty("gender");
        expect(user).toHaveProperty("status");
    })
    usersListSchema.parse(body);
})
