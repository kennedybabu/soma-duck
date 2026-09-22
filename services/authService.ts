import axios from "axios";
import { LoginPayload, SignupPayload, AuthResponse } from "@/types/auth";
import { backendUrl } from '@/lib/api';


export const authService = {
    async login(payload: LoginPayload): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>(backendUrl, payload);

        return data;
    },

    async signup(payload: SignupPayload): Promise<AuthResponse> {
        const { data } = await axios.post<AuthResponse>(backendUrl, payload);

        return data;
    }, 

    async logout():Promise<void> {
        await axios.post("")
    },

    async getCurrentUser(): Promise<AuthResponse["user"] | null> {
        try {
            const { data } = await axios.get("")

            return data.user;
        } catch {
            return null;
        }
    }
}