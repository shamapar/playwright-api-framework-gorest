export interface IUser {
    id: number;
    "name": string;
    "email": string;
    "gender": string;
    "status": string;
}

export interface IUserCreate {
    "name": string;
    "gender": string;
    "email": string;
    "status": string
}