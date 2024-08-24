import { ApiEndpoints } from "../endpoints";
import { apiService } from "../network";
import { ILoginRequest, ILoginResponse } from "./authentication.types";

const authenticationApi = apiService.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<
            ILoginResponse,
            ILoginRequest
        >({
            query: data => ({
                url: ApiEndpoints.login,
                method: 'POST',
                data
            })
        }),
    })
})

export const {
    useLoginMutation
} = authenticationApi