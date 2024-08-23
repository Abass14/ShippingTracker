import { createStackNavigator } from "@react-navigation/stack";
import { Screens, screenTransitionAnimationConfig } from "../../../utils/navigation";
import LandingScreen from "../../features/authentication/screen/landing-screen";

const {Screen, Navigator} = createStackNavigator()

const AuthenticationStackData = [
    {
        name: Screens.Authentication,
        Component: LandingScreen
    }
]

const AuthenticationStack = () => {
    return (
        <Navigator>
            {AuthenticationStackData.map(route => (
                <Screen 
                    key={route?.name}
                    component={route?.Component}
                    options={{ 
                        headerShown: false,
                        gestureDirection: 'horizontal',
                        transitionSpec: {
                            open: screenTransitionAnimationConfig.open,
                            close: screenTransitionAnimationConfig.close
                        } 
                    }}
                    name={route?.name}
                />
            ))}
        </Navigator>
    )
}

export default AuthenticationStack