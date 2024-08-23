import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types"
import { Easing } from "react-native"

export const Screens = {
    Authentication: 'AuthenticationScreen',
    Dashboard: 'Dashboard',
    Wallet: 'Wallet',
    Scan: 'Scan',
    Profile: 'Profile'
}

export const Stacks = {
    DashboardStack: 'DashboardStack',
    WalletStack: 'WalletStack',
    ScanStack: 'ScanStack',
    ProfileStack: 'ProfileStack',
}

export const screenTransitionAnimationConfig: {
    open: TransitionSpec,
    close: TransitionSpec
} = {
    open: {
        animation: 'timing',
        config: {
            easing: Easing.in(Easing.ease),
            duration: 1000
        }
    },
    close: {
        animation: 'timing',
        config: {
            easing: Easing.out(Easing.ease),
            duration: 1000
        }
    }
}