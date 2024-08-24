import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ErrorEnum } from "../../utils/enum/ErrorEnum";
import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";

export const axiosInstance = axios.create({
    baseURL: 'https://shippex-demo.bc.brandimic.com/api/method',
    timeout: 50_000,
    timeoutErrorMessage: 'Request Timeout'
})

const onRequest = (request: InternalAxiosRequestConfig<unknown>) => {
    request.headers['Content-Type'] = 'application/json';
    request.headers.Accept = '*/*';
    return request
}

const onResponse = (
    response: AxiosResponse<unknown, unknown>
) => {
    return response
}

const errorHanlder = async (error: AxiosError<unknown>) => {
    const status = error?.response?.status?.toString()
    switch (status) {
        case ErrorEnum.BadRequest:
            //handle some custom errors for bad request
            return Promise.reject(error);
        case ErrorEnum.NotFound:
            //handle some custom errors for 404 response
            return Promise.reject(error)
        case ErrorEnum.ServerError:
            return Promise.reject(error)
        case ErrorEnum.Unauthorized:
            return Promise.reject(error)
        default:
            return Promise.reject(error)
    }
}

const onRequestError = async (error: AxiosError<unknown>) => {
    return await errorHanlder(error)
}

const onResponseError = async (error: AxiosError<unknown>) => {
    return await errorHanlder(error)
}

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

const axiosBaseQuery = (): BaseQueryFn<AxiosRequestConfig, unknown, AxiosError> => {
    return async ({url, params, method, data}) => {
        try {
            const response = await axiosInstance({
                url,
                method,
                params,
                data
            })
            return { data: response?.data }
        } catch (error) {
            const axiosError = error as AxiosError
            return {
                error: axiosError
            }
        }
    }
}

export const apiService = createApi({
    baseQuery: axiosBaseQuery(),
    endpoints: () => ({})
})