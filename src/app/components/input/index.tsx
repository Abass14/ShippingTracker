import { useEffect, useRef, useState } from "react";
import { IAppInput } from "./input.types";
import { Animated, Easing, TextInput, View } from "react-native";
import { styles } from "./styles";
import useAppTheme from "../../hooks/useAppTheme";
import AppText from "../text";

const AppInput = ({
    label,
    value,
    error,
    style,
    prefix,
    ...rest
}: IAppInput) => {
    const { appColors } = useAppTheme()
    const [isFocused, setIsFocused] = useState(false)
    const styleSheet = styles(appColors)
    const labelOpacity = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(labelOpacity, {
            toValue: 1,
            duration: 300,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(labelOpacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        if (isFocused) {
            fadeIn()
        } else {
            fadeOut()
        }
    }, [isFocused])

    return (
        <View style={styleSheet.container}>
            <View style={[
                styleSheet.inputContainer,
                error ? styleSheet.errorState : null,
                isFocused ? { borderWidth: 1 } : null
            ]}>
                {label && isFocused ? (
                    <Animated.View style={{ opacity: labelOpacity }}>
                        <AppText style={styleSheet.label}>
                            {label}
                        </AppText>
                    </Animated.View>
                ) : null}
                <View style={styleSheet.row}>
                    {prefix && value ? (
                        <AppText style={styleSheet.prefix}>
                            {prefix}
                        </AppText>
                    ) : null}
                    <TextInput
                        style={[styleSheet.input, style]}
                        value={value}
                        onFocus={() => {
                            setIsFocused(true)
                        }}
                        onBlur={() => {
                            setIsFocused(false)
                        }}
                        {...rest}
                    />
                </View>
            </View>
            {error && (
                <AppText style={styleSheet.error}>
                    {error}
                </AppText>
            )}
        </View>
    )
}

export default AppInput