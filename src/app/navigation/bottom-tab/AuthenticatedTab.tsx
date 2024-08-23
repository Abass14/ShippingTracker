import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens, Stacks } from "../../../utils/navigation";
import DashboardStack from "../stack/DashboardStack";
import ScanStack from "../stack/ScanStack";
import WalletStack from "../stack/WalletStack";
import ProfileStack from "../stack/ProfileStack";
import ShippingTabBoxIcon from "../../../assets/svg/ShippingTabBox";
import ShippingTabScanIcon from "../../../assets/svg/ShippingTabScan";
import ShippingTabWalletIcon from "../../../assets/svg/ShippingTabWallet";
import ShippingTabProfileIcon from "../../../assets/svg/ShippingTabProfile";
import { useCallback } from "react";
import useAppTheme from "../../hooks/useAppTheme";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/text";

const {Navigator, Screen} = createBottomTabNavigator()

const AuthenticatedTabData = [
    {
        name: Stacks.DashboardStack,
        Component: DashboardStack
    },
    {
        name: Stacks.ScanStack,
        Component: ScanStack
    },
    {
        name: Stacks.WalletStack,
        Component: WalletStack
    },
    {
        name: Stacks.ProfileStack,
        Component: ProfileStack
    },
]

const AuthenticatedTab = () => {
    const {appColors} = useAppTheme()

    const IconMap = (color: string) => ({
        [Stacks.DashboardStack]: <ShippingTabBoxIcon color={color} />,
        [Stacks.ScanStack]: <ShippingTabScanIcon color={color} />,
        [Stacks.WalletStack]: <ShippingTabWalletIcon color={color} />,
        [Stacks.ProfileStack]: <ShippingTabProfileIcon color={color} />,
    })

    const TabNameMap = (color: string) => ({
        [Stacks.DashboardStack]: 'Shipments',
        [Stacks.ScanStack]: 'Scan',
        [Stacks.WalletStack]: 'Wallet',
        [Stacks.ProfileStack]: 'Profile',
    })

    const TabIcon = useCallback((tab: string, focused: boolean) => {
        const color = focused ? appColors.royalBlue : appColors.tabGray
        return (
            <View style={style.tab}>
                {IconMap(color)[tab]}
                <AppText style={[style.text, {color}]}>
                    {tab}
                </AppText>
            </View>
        )
    }, [])

    return (
        <Navigator>
            {AuthenticatedTabData.map(route => (
                <Screen 
                    key={route?.name}
                    component={route?.Component}
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ focused }) => TabIcon(route?.name, focused),
                        tabBarLabel: () => null
                    }}
                    name={route?.name}
                />
            ))}
        </Navigator>
    )
}

const style = StyleSheet.create({
    tab: {
        gap: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 11
    }
})


export default AuthenticatedTab