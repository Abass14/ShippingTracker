import { Animated, StatusBar, View } from "react-native"
import SplashIcon from "../../../assets/svg/SplashIcon"
import useAppTheme from "../../hooks/useAppTheme"
import { styles } from "./styles"
import { useEffect, useRef, useState } from "react"
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils"

const SplashScreenWrapper = ({ children }: ViewProps) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const [showLanding, setShowLanding] = useState(false)
    const scale = useRef(new Animated.Value(1)).current
    const rotateValue = useRef(new Animated.Value(0)).current;

    const translateY = scale.interpolate({
        inputRange: [0, 3, 20],
        outputRange: [0, 0, -400]
    })
    
    const translateX = scale.interpolate({
        inputRange: [0, 3, 20],
        outputRange: [0, 0, -200]
    })

    const rotationX = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '60deg'],
    })
    
    const rotationY = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '20deg'],
    })

    const bgColor = scale.interpolate({
        inputRange: [0, 3, 20],
        outputRange: [appColors.white, appColors.white, appColors.royalBlue],
    })

    const animateSplash = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 3,
                duration: 2000,
                useNativeDriver: true
            }),
            Animated.timing(rotateValue, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 20,
                useNativeDriver: true
            }),
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
                <Animated.View
                    style={[
                        styleSheet.icon,
                        {
                            transform: [
                                {
                                    scale: scale,
                                },
                                {
                                    rotateX: rotationX,
                                },
                                {
                                    rotateY: rotationY
                                },
                                {
                                    translateX,
                                },
                                {
                                    translateY
                                }
                            ]
                        }
                    ]}
                >
                    <SplashIcon />
                </Animated.View>
            </View>
        </Animated.View>
    )
}

export default SplashScreenWrapper