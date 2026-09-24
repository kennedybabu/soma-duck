export interface LoginPayload {
    email: string;
    password: string;
}

export interface SignupPayload {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    role: string;
    password: string;
    profileImageUrl: string;
}

export interface User {
    createdAt: string;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
    token: string;
}

export interface AuthResponse {
    user: User;
    token?: string;
}