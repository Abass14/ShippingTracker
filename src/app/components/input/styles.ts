import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        gap: 4
    },
    inputContainer: {
        gap: 4,
        backgroundColor: color.gray,
        borderRadius: 10, 
        borderColor: color.royalBlue,
        width: '100%',
        height: 56,
        paddingHorizontal: 12,
    },
    label: {
        fontSize: 10,
        color: color.textGray
    },
    input: {
        color: color.royalBlue,
        fontSize: 16,
        flex: 1
    },
    placeholder: {
        fontSize: 16
    },
    errorState: {
        borderColor: color.red,
        borderWidth: 1
    },
    error: {
        fontSize: 11,
        color: color.red
    }
})