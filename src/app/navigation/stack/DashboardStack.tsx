import { createStackNavigator } from "@react-navigation/stack";
import { Screens, screenTransitionAnimationConfig } from "../../../utils/navigation";
import Dashboard from "../../features/dashboard/dashboard";

const {Screen, Navigator} = createStackNavigator()

const DashboardStackData = [
    {
        name: Screens.Dashboard,
        Component: Dashboard
    }
]

const DashboardStack = () => {
    return (
        <Navigator>
            {DashboardStackData.map(route => (
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

export default DashboardStack