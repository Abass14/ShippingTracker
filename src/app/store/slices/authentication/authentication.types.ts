import { ILoginResponse } from "../../../services/authentication/authentication.types"

export interface IAuthenticationState {
    isUserAuthenticated: boolean
    user: Partial<ILoginResponse>
}