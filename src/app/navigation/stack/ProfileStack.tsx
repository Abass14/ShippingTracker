import { createStackNavigator } from "@react-navigation/stack";
import { Screens, screenTransitionAnimationConfig } from "../../../utils/navigation";
import ProfileScreen from "../../features/profile";

const {Screen, Navigator} = createStackNavigator()

const ProfileStackData = [
    {
        name: Screens.Profile,
        Component: ProfileScreen
    }
]

const ProfileStack = () => {
    return (
        <Navigator>
            {ProfileStackData.map(route => (
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

export default ProfileStack