import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 36,
        height: 36
    }
})