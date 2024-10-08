import { View } from "react-native"
import AppBottomSheet from "../../../components/bottomsheet"
import { ILoginSheet } from "./login-sheet.types"
import AppText from "../../../components/text"
import { TextTypes } from "../../../../utils/enum/TextEnums"
import AppInput from "../../../components/input"
import AppButton from "../../../components/button"
import { useMemo, useState } from "react"
import useAppTheme from "../../../hooks/useAppTheme"
import { styles } from "./styles"
import useLogin from "../hook/useLogin"

const LoginSheet = ({ bottomsheetRef, ...rest }: ILoginSheet) => {
    const {appColors} = useAppTheme()
    const styleSheet = styles(appColors)
    const {LoginFormik, isLoading} = useLogin()
    const [url, setUrl] = useState('')

    return (
        <AppBottomSheet
            bottomsheetRef={bottomsheetRef}
            withBackIcon
            {...rest}
        >
            <View style={styleSheet.container}>
                <View style={styleSheet.main}>
                    <AppText style={styleSheet.title} type={TextTypes.BOLD}>
                        Login
                    </AppText>
                    <AppText style={styleSheet.description}>
                        Please enter your First, Last name and your
                        phone number in order to register
                    </AppText>
                    <View style={styleSheet.input}>
                        <AppInput
                            placeholder="URL"
                            label="URL"
                            prefix="https://"
                            value={url}
                            onChangeText={setUrl}
                            testID="url"
                        />
                        <AppInput
                            placeholder="Username / Email"
                            label="Username / Email"
                            keyboardType="email-address"
                            value={LoginFormik.values.usr}
                            onChangeText={text => LoginFormik.setFieldValue('usr', text)}
                            error={LoginFormik.errors.usr}
                            testID="username"
                            errorTestId="username-error"
                        />
                        <AppInput
                            placeholder="Password"
                            label="Password"
                            secureTextEntry
                            value={LoginFormik.values.pwd}
                            onChangeText={text => LoginFormik.setFieldValue('pwd', text)}
                            error={LoginFormik.errors.pwd}
                            testID="password"
                            errorTestId="password-error"
                        />
                    </View>
                </View>
                <AppButton 
                    onPress={() => LoginFormik.submitForm()}
                    isLoading={isLoading}
                    testID="login-btn"
                >
                    Login
                </AppButton>
            </View>
        </AppBottomSheet>
    )
}

export default LoginSheet