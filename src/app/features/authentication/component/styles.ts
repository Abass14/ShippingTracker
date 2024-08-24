import { Dimensions, StyleSheet } from "react-native";
import { AppColorTheme } from "../../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - 200,
        justifyContent: 'space-between'
    },
    main: {
        gap: 30
    },
    input: {
        gap: 20
    },
    title: {
        fontSize: 30
    },
    description: {
        fontSize: 14,
        color: color.textGray
    },
    
})