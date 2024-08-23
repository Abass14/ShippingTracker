import { createStackNavigator } from "@react-navigation/stack";
import { Screens, screenTransitionAnimationConfig } from "../../../utils/navigation";
import ScanScreen from "../../features/scan";

const {Screen, Navigator} = createStackNavigator()

const ScanStackData = [
    {
        name: Screens.Scan,
        Component: ScanScreen
    }
]

const ScanStack = () => {
    return (
        <Navigator>
            {ScanStackData.map(route => (
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

export default ScanStack