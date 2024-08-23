import { NavigationContainer } from "@react-navigation/native"
import SplashScreen from "../../features/splash"
import AuthenticationStack from "../stack/AuthenticationStack"
import AuthenticatedTab from "../bottom-tab/AuthenticatedTab"

const Main = () => {
    const authenticated = false

    return (
        <SplashScreen>
            <NavigationContainer>
                {!authenticated ? (
                    <AuthenticationStack />
                ) : (
                    <AuthenticatedTab />
                )}
            </NavigationContainer>
        </SplashScreen>
    )
}

export default Main