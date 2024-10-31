import axios, { AxiosInstance, CreateAxiosDefaults } from "axios"
import { RequestClientOptions } from "./type"

class RequestClient {
    private readonly instance: AxiosInstance

    constructor(options: RequestClientOptions = {}) {
        const defaultConfig: CreateAxiosDefaults = {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            timeout: 10_000
        }

        const config = {
            ...defaultConfig,
            ...options,
            headers: {
                ...defaultConfig.headers,
                ...options.headers
            }
        }

        this.instance = axios.create(config)
    }

    public getInstance() {
        return this.instance
    }

}

const requestClient = new RequestClient({ baseURL: "api" })
export { requestClient }