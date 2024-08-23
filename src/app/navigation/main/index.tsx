import { NavigationContainer } from "@react-navigation/native"
import SplashScreenWrapper from "../../features/splash"
import AuthenticationStack from "../stack/AuthenticationStack"
import AuthenticatedTab from "../bottom-tab/AuthenticatedTab"
import { useEffect } from "react"
import SplashScreen from "react-native-splash-screen"

const Main = () => {
    const authenticated = true

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <SplashScreenWrapper>
            <NavigationContainer>
                {!authenticated ? (
                    <AuthenticationStack />
                ) : (
                    <AuthenticatedTab />
                )}
            </NavigationContainer>
        </SplashScreenWrapper>
    )
}

export default Main