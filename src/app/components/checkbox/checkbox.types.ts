import { TouchableOpacityProps } from "react-native";

export interface ICheckbox extends TouchableOpacityProps {
    onChecked: (checked: boolean) => void
    isChecked: boolean
    size?: number
}