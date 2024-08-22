import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        backgroundColor: color.gray,
        borderRadius: 10,
        paddingHorizontal: 14,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        fontSize: 16,
        color: color.royalBlue,
        flex: 1
    }
})