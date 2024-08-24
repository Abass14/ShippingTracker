import { StyleSheet } from "react-native";
import { AppColorTheme } from "../../../utils/interfaces/Theme.types";

export const styles = (color: AppColorTheme) => StyleSheet.create({
    main: {
        backgroundColor: color.black,
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    background: {
        backgroundColor: color.white,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 5,
        shadowColor: color.textGray,
        shadowOffset: {height: 2, width: 1},
        shadowOpacity: 0.3,
        shadowRadius: 7
    },
    container: {
        paddingHorizontal: 10,
        height: '100%'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: color.gray,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    hyperlinks: {
        fontSize: 14,
        color: color.royalBlue
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        flex: 1
    },
    flexEnd: {
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
    center: {
        flex: 3,
        alignItems: 'center',
    },
    children: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    footer: {
        paddingBottom: 30
    }
})