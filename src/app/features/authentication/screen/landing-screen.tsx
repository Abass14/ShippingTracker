import { Animated, Easing, StatusBar, View } from "react-native"
import useAppTheme from "../../../hooks/useAppTheme"
import AppIcon from "../../../../assets/svg/AppIcon"
import AppButton from "../../../components/button"
import { ButtonTypes } from "../../../../utils/enum/ButtonTypes"
import { styles } from "./styles"
import { useEffect, useRef } from "react"
import LoginSheet from "../component/login-sheet"
import useBottomSheet from "../../../hooks/useBottomSheet"

const LandingScreen = () => {
    const {appColors} = useAppTheme()
    const styleSheet = styles(appColors)
    const opacity = useRef(new Animated.Value(0)).current
    const {bottomSheetRef, openBottomSheet} = useBottomSheet()

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.in(Easing.ease)
        }).start()
    }

    useEffect(() => {
        fadeIn()
    }, [])

    return (
        <Animated.View style={[styleSheet.container, {opacity}]}>
            <StatusBar backgroundColor={appColors.royalBlue} barStyle={'light-content'} />
            <View style={styleSheet.main}>
                <AppIcon />
            </View>
            <AppButton
                type={ButtonTypes.WHITE}
                onPress={openBottomSheet}
            >
                Login
            </AppButton>
            <LoginSheet 
                bottomsheetRef={bottomSheetRef}
            />
        </Animated.View>
    )
}

export default LandingScreen