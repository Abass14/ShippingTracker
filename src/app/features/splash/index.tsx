import { Animated, Dimensions, Easing, StatusBar, View } from "react-native"
import SplashIcon from "../../../assets/svg/SplashIcon"
import useAppTheme from "../../hooks/useAppTheme"
import { styles } from "./styles"
import { useEffect, useRef, useState } from "react"
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils"

const SplashScreenWrapper = ({ children }: ViewProps) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    const sizeAnim = useRef(new Animated.Value(0)).current
    const [showLanding, setShowLanding] = useState(false)

    const size = sizeAnim.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [36, 144, height + width],
        easing: Easing.out(Easing.ease),
    })

    const bgColor = sizeAnim.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [appColors.white, appColors.white, appColors.royalBlue],
        easing: Easing.out(Easing.ease),
    })

    const animateSplash = () => {
        Animated.sequence([
            Animated.timing(sizeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.parallel([
                Animated.timing(sizeAnim, {
                    toValue: 2,
                    duration: 1000,
                    useNativeDriver: false,
                    delay: 1000
                }),
                Animated.timing(sizeAnim, {
                    toValue: 2,
                    duration: 1000,
                    useNativeDriver: false,
                    delay: 1000
                })
            ])
        ]).start(() => setShowLanding(true))
    }

    useEffect(() => {
        animateSplash()
    }, [])

    if (showLanding) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <Animated.View style={[styleSheet.container, { backgroundColor: bgColor }]}>
            <StatusBar backgroundColor={appColors.white} barStyle={'dark-content'} />
            <View style={styleSheet.main}>
                <Animated.View style={[styleSheet.icon, { width: size, height: size }]}>
                    <SplashIcon />
                </Animated.View>
            </View>
        </Animated.View>
    )
}

export default SplashScreenWrapper