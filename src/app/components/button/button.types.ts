import { ReactNode } from "react";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { ButtonTypes } from "../../../utils/enum/ButtonTypes";

export interface IButton extends TouchableOpacityProps {
    Icon?: ReactNode
    type?: ButtonTypes
    labelStyle?: StyleProp<TextStyle>
    isLoading?: boolean
}