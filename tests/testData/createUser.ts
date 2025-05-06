import { faker } from "@faker-js/faker"

export const createUserPayload = {
    name: faker.person.fullName(),
    gender: faker.person.sex(),
    email: faker.internet.email(),
    status: "active"
}

export const duplicateUser = {

    name: 'Ms. Christie Rodriguez',
    gender: 'female',
    email: 'Helga84@gmail.com',
    status: 'active'
}