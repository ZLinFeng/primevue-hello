export namespace AuthApi {
    export enum API {
        login = "/auth/login",
    }


    export interface LoginParams {
        username: string;
        password: string;
    }

    export interface LoginResult {
        token: string;
        userId: number;
        username: string;
    }
}