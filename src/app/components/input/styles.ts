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
        height: 50,
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    label: {
        fontSize: 10,
        color: color.textGray
    },
    input: {
        color: color.royalBlue,
        fontSize: 14,
        flex: 1
    },
    placeholder: {
        fontSize: 14
    },
    errorState: {
        borderColor: color.red,
        borderWidth: 1
    },
    error: {
        fontSize: 11,
        color: color.red
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        gap: 5
    },
    prefix: {
        fontSize: 13,
        color: color.textGray,
    }
})