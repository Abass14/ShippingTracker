import { IBottomSheet } from "./bottomsheet.types"
import { Platform, Pressable, View } from "react-native"
import ChevroLeftIcon from "../../../assets/svg/ChevronLeft"
import AppText from "../text"
import useAppTheme from "../../hooks/useAppTheme"
import { styles } from "./styles"
import { TextTypes } from "../../../utils/enum/TextEnums"
import { Portal } from "react-native-portalize"
import { Modalize } from "react-native-modalize"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const AppBottomSheet = ({
    bottomsheetRef,
    title,
    withBackIcon,
    onDone,
    scrollEnabled,
    horizontal,
    modalHeight,
    modalStyle,
    onClose,
    children,
    handleClose,
    withCloseIcon = false,
    SubTitleComponent,
    accessibilityLabel,
    FooterComponent,
    DialogueIcon,
    dialogueIconStyles,
    contentStyle,
    ...rest
}: IBottomSheet) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)
    const { bottom } = useSafeAreaInsets();

    return (
        <Portal>
            <Modalize
                ref={bottomsheetRef}
                useNativeDriver={true}
                adjustToContentHeight={modalHeight ? false : true}
                disableScrollIfPossible={false}
                scrollViewProps={{
                    showsVerticalScrollIndicator: false,
                    nestedScrollEnabled: true,
                    scrollEnabled: scrollEnabled,
                    horizontal: horizontal,
                    keyboardShouldPersistTaps: 'always',
                }}
                avoidKeyboardLikeIOS={true}
                modalHeight={modalHeight}
                handlePosition="inside"
                modalStyle={[modalStyle]}
                keyboardAvoidingBehavior={Platform.OS === 'ios' ? undefined : 'height'}
                onClose={onClose}
                HeaderComponent={
                    <View style={styleSheet.header}>
                        <Pressable style={styleSheet.row} onPress={() => bottomsheetRef.current?.close()}>
                            {withBackIcon && <ChevroLeftIcon />}
                            <AppText type={TextTypes.MEDIUM} style={styleSheet.hyperlinks}>
                                Cancel
                            </AppText>
                        </Pressable>
                        <View style={styleSheet.center}>
                            <AppText type={TextTypes.BOLD} style={styleSheet.title}>
                                {title}
                            </AppText>
                        </View>
                        <Pressable style={[styleSheet.row, styleSheet.flexEnd]} onPress={onDone}>
                            {onDone && (
                                <AppText type={TextTypes.MEDIUM} style={styleSheet.hyperlinks}>
                                    Done
                                </AppText>
                            )}
                        </Pressable>
                    </View>
                }
                FooterComponent={<View style={{ paddingBottom: bottom }} >{FooterComponent}</View>}
                {...rest}>
                <View style={styleSheet.container}>
                    <View style={styleSheet.children}>
                        {children}
                    </View>
                </View>
            </Modalize>
        </Portal>
    )
}

export default AppBottomSheet