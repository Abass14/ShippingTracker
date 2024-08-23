import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: color.shipmentGray,
        borderRadius: 10,
        padding: 15
    },
    active: {
        borderWidth: 1,
        borderColor: color.royalBlue
    },
    details: {
        flex: 1
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    awbText: {
        fontSize: 13,
        color: color.textGray
    },
    cityText: {
        fontSize: 13,
        color: color.lightTextGray
    },
    status: {
        borderWidth: 1,
        borderColor: color.white,
        borderRadius: 4,
        padding: 6
    },
    statusText: {
        fontSize: 11
    },
    id: {
        fontSize: 18
    }
})