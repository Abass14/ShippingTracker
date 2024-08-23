import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        gap: 20
    },
    scrollView: {
        flexGrow: 1
    },
    paddingHorizontal: {
        paddingHorizontal: 20
    }
})