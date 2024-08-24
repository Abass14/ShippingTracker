import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stacks } from "../../../utils/navigation";
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
import { Platform, StyleSheet, View } from "react-native";
import AppText from "../../components/text";
import { TextTypes } from "../../../utils/enum/TextEnums";

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

    const TabNameMap = {
        [Stacks.DashboardStack]: 'Shipments',
        [Stacks.ScanStack]: 'Scan',
        [Stacks.WalletStack]: 'Wallet',
        [Stacks.ProfileStack]: 'Profile',
    }

    const TabIcon = useCallback((tab: string, focused: boolean) => {
        const color = focused ? appColors.royalBlue : appColors.tabGray
        return (
            <View style={style.tab}>
                {IconMap(color)[tab]}
                <AppText type={TextTypes.MEDIUM} style={[style.text, {color}]}>
                    {TabNameMap[tab]}
                </AppText>
            </View>
        )
    }, [])

    return (
        <Navigator
            screenOptions={{
                header: () => null,
                tabBarStyle: {
                    backgroundColor: appColors.white, 
                    borderWidth: 0,
                    width: '100%',
                    ...Platform.select({
                        android: {
                            height: 70,
                            paddingBottom: 10
                        },
                        ios: {
                            paddingTop: 10
                        }
                    })
                }
            }}
        >
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
        gap: 5,
        alignItems: 'center',
        paddingTop: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 11
    }
})


export default AuthenticatedTab