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

const LoginSheet = ({ bottomsheetRef, ...rest }: ILoginSheet) => {
    const {appColors} = useAppTheme()
    const styleSheet = styles(appColors)
    const snapPoints = useMemo(() => ['1%', '90%'], [])
    const [url, setUrl] = useState('')

    return (
        <AppBottomSheet
            bottomsheetRef={bottomsheetRef}
            withBackIcon
            snapPoints={snapPoints}
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
                        />
                        <AppInput
                            placeholder="Username / Email"
                            label="Username / Email"
                        />
                        <AppInput
                            placeholder="Password"
                            label="Password"
                            secureTextEntry
                        />
                    </View>
                </View>
                <AppButton isLoading>
                    Login
                </AppButton>
            </View>
        </AppBottomSheet>
    )
}

export default LoginSheet