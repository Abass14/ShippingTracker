import { ActivityIndicator, TouchableOpacity } from "react-native";
import { ButtonTypes } from "../../../utils/enum/ButtonTypes";
import { IButton } from "./button.types";
import AppText from "../text";
import { TextTypes } from "../../../utils/enum/TextEnums";
import useAppTheme from "../../hooks/useAppTheme";
import { styles } from "./styles";

const AppButton = ({
    type = ButtonTypes.BLUE,
    Icon,
    style,
    isLoading = false,
    labelStyle,
    children,
    disabled,
    ...rest
}: IButton) => {
    const { appColors } = useAppTheme()
    const textColors = type === ButtonTypes.BLUE ? appColors.white : appColors.royalBlue
    const backgroundColor = type === ButtonTypes.BLUE ? appColors.royalBlue : appColors.white
    return (
        <TouchableOpacity
            style={[
                styles.container, 
                {backgroundColor, opacity: isLoading || disabled ? 0.5 : 1}, 
                style
            ]}
            disabled={isLoading || disabled}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator
                    color={type === ButtonTypes.BLUE ? appColors.white : appColors.royalBlue}
                    size={'small'}
                />
            ) : (
                <>
                    {Icon}
                    <AppText type={TextTypes.BOLD} style={[styles.text, {color: textColors}, labelStyle]}>
                        {children}
                    </AppText>
                </>
            )}
        </TouchableOpacity>
    )
}

export default AppButton