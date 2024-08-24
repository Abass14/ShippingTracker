import { NavigationContainer } from "@react-navigation/native"
import SplashScreenWrapper from "../../features/splash"
import AuthenticationStack from "../stack/AuthenticationStack"
import AuthenticatedTab from "../bottom-tab/AuthenticatedTab"
import { useEffect } from "react"
import SplashScreen from "react-native-splash-screen"
import { useAppSelector } from "../../store/hooks/useSelector"

const Main = () => {
    const {user} = useAppSelector(state => state.Authentication)

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <SplashScreenWrapper>
            <NavigationContainer>
                {!user?.full_name ? (
                    <AuthenticationStack />
                ) : (
                    <AuthenticatedTab />
                )}
            </NavigationContainer>
        </SplashScreenWrapper>
    )
}

export default Main