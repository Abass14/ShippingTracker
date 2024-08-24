import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreEnum } from "../../../../utils/enum/StoreEnum";
import { AuthenticationState } from "./state";
import { IAuthenticationState } from "./authentication.types";
import { ILoginResponse } from "../../../services/authentication/authentication.types";

const authenticationSlice = createSlice({
    name: StoreEnum.Authentication,
    initialState: AuthenticationState,
    reducers: {
        setIsUserAuthenticated: (
            state: IAuthenticationState,
            action: PayloadAction<boolean>
        ) => {
            state.isUserAuthenticated = action.payload
        },
        setUser: (
            state: IAuthenticationState,
            action: PayloadAction<ILoginResponse>
        ) => {
            state.user = action.payload
        },
        clearAuthenticationSlice: (
            state: IAuthenticationState
        ) => {
            state = AuthenticationState
        },
    }
})

export const {actions, reducer: authReducer} = authenticationSlice
export const {
    setIsUserAuthenticated,
    setUser,
    clearAuthenticationSlice
} = actions