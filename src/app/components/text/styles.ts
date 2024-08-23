import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    text: {
        color: color.black
    }
})