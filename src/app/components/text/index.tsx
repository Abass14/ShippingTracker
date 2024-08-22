import React from "react";
import { IAppText } from "./text.types";
import { TextTypes } from "../../../utils/enum/TextEnums";
import { Text } from "react-native";
import { fonts } from "../../../utils/fonts";

const AppText = ({
    type = TextTypes.REGULAR,
    children,
    style,
    ...rest
}: IAppText) => {
    
    return (
        <Text 
            style={[
                {fontFamily: fonts[type]},
                style
            ]}
            {...rest}
        >
            {children}
        </Text>
    )
}

export default AppText