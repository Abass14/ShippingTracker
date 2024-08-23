import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        gap: 12
    },
    title: {
        fontSize: 14,
        color:color.textGray
    },
    statusList: {
        gap: 12,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    statusSpan: {
        backgroundColor: color.shipmentGray,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    statusText: {
        fontSize: 14,
        color: color.textGray
    },
    activeSpan: {
        borderWidth: 1,
        borderColor: color.royalBlue
    },
    activeText: {
        color: color.royalBlue
    }
})