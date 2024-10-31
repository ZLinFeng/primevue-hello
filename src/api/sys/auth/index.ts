import { requestClient } from "../../../http"
import { AuthApi } from "./type"

export const login = (username: string, password: string) => {
    return requestClient.getInstance().post(AuthApi.API.Login, {
        username: username,
        password: password
    })
}