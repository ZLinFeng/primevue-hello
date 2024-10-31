export namespace AuthApi {
    export enum API {
        Login = "/sys/auth/login",
        Register = "sys/auth/register",
        ChangePassword = "sys/auth/changePassword"
    }


    export interface UserReq {
        Username: string,
        Password: string,
        DeptId: number,
        RoleIds: number[],
        Avatar: string
    }
}