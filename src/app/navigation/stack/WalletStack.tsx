import { createStackNavigator } from "@react-navigation/stack";
import { Screens, screenTransitionAnimationConfig } from "../../../utils/navigation";
import WalletScreen from "../../features/wallet";

const {Screen, Navigator} = createStackNavigator()

const WalletStackData = [
    {
        name: Screens.Wallet,
        Component: WalletScreen
    }
]

const WalletStack = () => {
    return (
        <Navigator>
            {WalletStackData.map(route => (
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

export default WalletStack