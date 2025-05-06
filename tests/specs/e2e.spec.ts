import { test, expect } from '@playwright/test'
import { createUserPayload, duplicateUser } from '../testData/createUser'
import { deleteApiRequest, getApiRequest, patchApiRequest, postApiRequest } from '../helper/actions'
import { IUser } from '../customType/user';
import { updatePayload } from '../testData/updateData';

let USERID: number;

test.beforeAll('create a user', async ({ request }) => {
    const response = await postApiRequest("/public/v2/users", createUserPayload, request);
    expect(response.status()).toEqual(201);

    const body: IUser = await response.json()
    expect(body).toHaveProperty("id");

    USERID = body.id;
})

test('create a duplicate user', async ({ request }) => {
    const response = await postApiRequest("/public/v2/users", duplicateUser, request);
    expect(response.status()).toEqual(422);
})

test('check user by ID', async ({ request }) => {
    const response = await getApiRequest(`/public/v2/users/${USERID}`, request);
    expect(response.status()).toEqual(200);

    const body: IUser = await response.json()
    expect(body.id).toEqual(USERID);
})

test('Update partial user data-email', async ({ request }) => {
    const response = await patchApiRequest(`/public/v2/users/${USERID}`, request, updatePayload);
    expect(response.status()).toEqual(200);

    const body: IUser = await response.json()
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("name");
    expect(body).toHaveProperty("email");
    expect(body).toHaveProperty("gender");
    expect(body).toHaveProperty("status");
    expect(body.email).toEqual(updatePayload.email);
})

test('delelte user from list', async ({ request }) => {
    const response = await deleteApiRequest(`/public/v2/users/${USERID}`, request);
    expect(response.status()).toEqual(204);

    const searchUser = await patchApiRequest(`/public/v2/users/${USERID}`, request, updatePayload);
    expect(searchUser.status()).toEqual(404);

    const listUsers = await getApiRequest("/public/v2/users/", request);
    const body: IUser[] = await listUsers.json();
    body.forEach(user => {
        expect(user.id).not.toEqual(USERID);
    });
});
