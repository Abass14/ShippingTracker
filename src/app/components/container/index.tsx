import { KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, View } from "react-native"
import { IContainer } from "./container.types"
import useAppTheme from "../../hooks/useAppTheme"
import { styles } from "./styles"
import { LightModeColors } from "../../../assets/colors"
import { isIOS } from "../../../utils/platorm"

const Container = ({
    children, 
    header, 
    isScrollable, 
    statusBarProps={
        backgroundColor: LightModeColors.white,
        barStyle: 'dark-content'
    }, 
    ...rest
}: IContainer) => {
    const {appColors} = useAppTheme()
    const styleSheet = styles(appColors)

    return (
        <View style={[styleSheet.container, {backgroundColor: statusBarProps?.backgroundColor}]} {...rest}>
            <StatusBar {...statusBarProps} />
            <SafeAreaView style={styleSheet.container}>
                <KeyboardAvoidingView style={[styleSheet.container, styleSheet.paddingHorizontal]} behavior={isIOS() ? 'padding' : 'height'}>
                    {header}
                    {isScrollable ? (
                        <ScrollView contentContainerStyle={styleSheet.scrollView}>
                            {children}
                        </ScrollView>
                    ) : children}
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default Container