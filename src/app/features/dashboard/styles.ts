import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    container: {
        flex: 1,
        gap: 20
    },
    nameContainer: {
        gap: 10
    },
    hello: {
        fontSize: 14,
        color: color.textGray,
    },
    name: {
        fontSize: 22
    },
    row: {
        flexDirection: 'row',
        gap: 14
    },
    btn: {
        flex: 1,
        height: 44
    },
    filterBtn: {
        flex: 1,
        backgroundColor: color.gray,
        height: 44
    },
    filterBtnText: {
        color: color.textGray
    },
    shipmentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkboxRow: {
        flexDirection: 'row',
        gap: 8
    },
    markAll: {
        fontSize: 16,
        color: color.royalBlue
    },
    shippmentContainer: {
        gap: 16,
        flex: 1
    },
    shippmentTitle: {
        fontSize: 20
    },
    list: {
        gap: 10
    },
    emptyState: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyStateText: {
        fontSize: 14
    }
})