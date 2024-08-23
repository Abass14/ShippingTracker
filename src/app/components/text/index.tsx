import React from "react";
import { IAppText } from "./text.types";
import { TextTypes } from "../../../utils/enum/TextEnums";
import { Text } from "react-native";
import { fonts } from "../../../utils/fonts";
import useAppTheme from "../../hooks/useAppTheme";
import { styles } from "./styles";

const AppText = ({
    type = TextTypes.REGULAR,
    children,
    style,
    ...rest
}: IAppText) => {
    const {appColors} = useAppTheme()
    const styleSheet = styles(appColors)
    return (
        <Text 
            style={[
                {fontFamily: fonts[type]},
                styleSheet.text,
                style
            ]}
            {...rest}
        >
            {children}
        </Text>
    )
}

export default AppText