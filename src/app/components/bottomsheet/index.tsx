import BottomSheet, { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet"
import { IBottomSheet } from "./bottomsheet.types"
import { Pressable, View } from "react-native"
import ChevroLeftIcon from "../../../assets/svg/ChevronLeft"
import AppText from "../text"
import useAppTheme from "../../hooks/useAppTheme"
import { styles } from "./styles"
import { TextTypes } from "../../../utils/enum/TextEnums"
import CustomBackdrop from "./backdrop"

const AppBottomSheet = ({
    bottomsheetRef,
    title,
    withBackIcon,
    onDone,
    children,
    ...rest
}: IBottomSheet) => {
    const { appColors } = useAppTheme()
    const styleSheet = styles(appColors)

    return (
        <BottomSheet
            ref={bottomsheetRef}
            backgroundStyle={styleSheet.background}
            backdropComponent={props =>
                <CustomBackdrop {...props} />
            }
            enablePanDownToClose
            keyboardBehavior='extend'
            keyboardBlurBehavior='restore'
            android_keyboardInputMode="adjustResize"
            index={-1}
            {...rest}
        >
            <BottomSheetScrollView automaticallyAdjustKeyboardInsets style={styleSheet.container} contentContainerStyle={{flexGrow: 1}}>
                <View style={styleSheet.header}>
                    <Pressable style={styleSheet.row} onPress={() => bottomsheetRef.current?.snapToPosition(-1)}>
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
                <View style={styleSheet.children}>
                    {children}
                </View>
            </BottomSheetScrollView>
        </BottomSheet>
    )
}

export default AppBottomSheet