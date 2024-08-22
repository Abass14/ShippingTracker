
import { Animated, Easing, Pressable, TextInput, View } from "react-native";
import useAppTheme from "../../hooks/useAppTheme";
import { styles } from "./styles";
import { ISearchInput } from "./search-bar.types";
import SearchIcon from "../../../assets/svg/SearchIcon";
import ClearIcon from "../../../assets/svg/ClearIcon";
import { useEffect, useRef, useState } from "react";

const AppSearchBar = ({
    style,
    value,
    onChangeText,
    ...rest
}: ISearchInput) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const opacity = useRef(new Animated.Value(0)).current
    const [inputValue, setInputValue] = useState(value)

    const handleInputChange = (val: string) => {
        setInputValue(val)
        if (onChangeText) onChangeText(val)
    }

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        if (value) {
            fadeIn()
        } else {
            fadeOut()
        }
    }, [value])

    return (
        <View style={styleSheet.container}>
            <SearchIcon />
            <TextInput
                style={[styleSheet.input, style]}
                value={inputValue}
                onChangeText={handleInputChange}
                {...rest}
            />
            {value !== undefined && (
                <Animated.View style={{ opacity }}>
                    <Pressable onPress={() => handleInputChange('')}>
                        <ClearIcon />
                    </Pressable>
                </Animated.View>
            )}
        </View>
    )
}

export default AppSearchBar