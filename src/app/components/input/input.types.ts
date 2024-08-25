import { TextInputProps } from "react-native";

export interface IAppInput extends TextInputProps {
    label?: string,
    error?: string
    prefix?: string
    errorTestId?: string
}