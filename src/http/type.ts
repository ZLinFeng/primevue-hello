import type { InternalAxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from "axios"

type RequestContentType =
    | "application/json;charset=utf-8"
    | "application/octet-stream;charset=utf-8"
    | "application/x-www-form-urlencoded;charset=utf-8"
    | "multipart/form-data;charset=utf-8"

type RequestClientOptions = CreateAxiosDefaults;

interface ResponseIntercepytorConfig<T = any> {
    fulfilled?: (response: AxiosResponse<T>) => AxiosResponse | Promise<AxiosResponse>
    rejected?: (error: any) => any
}

interface RequestInterceptorConfig {
    fulfilled?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>
    rejected?: (error: any) => any
}

interface HttpResponse<T = any> {
    code: number
    msg: string
    data: T
}

export type { HttpResponse, RequestContentType, RequestClientOptions, ResponseIntercepytorConfig, RequestInterceptorConfig }



