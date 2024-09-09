import MockAdapter from "axios-mock-adapter"
import axios from "axios"
import { AuthApi } from "../api/auth/type"

const mock = new MockAdapter(axios)

const authInitMock = () => {
    mock.onPost(AuthApi.API.login).reply(200, {
        code: 10000,
        msg: "Success",
        data: {
            token: "asdasdasd",
            userId: 1,
            username: "Allen"
        }
    })
}

export default authInitMock