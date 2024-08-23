import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.royalBlue,
        paddingBottom: 30,
        paddingHorizontal: 20
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})