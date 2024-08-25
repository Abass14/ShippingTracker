
import { ReactNode, RefObject } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Modalize, ModalizeProps } from "react-native-modalize";

export interface IBottomSheet extends ModalizeProps {
    title?: string
    onDone?: () => void
    withBackIcon?: boolean
    bottomsheetRef: RefObject<Modalize>
    scrollEnabled?: boolean;
    horizontal?: boolean;
    handleClose?: () => void;
    withCloseIcon?: boolean;
    accessibilityLabel?: string;
    SubTitleComponent?: ReactNode | string;
    DialogueIcon?: ReactNode,
    dialogueIconStyles?: StyleProp<ViewStyle>
    contentStyle?: StyleProp<ViewStyle>
    contentTestId?: string
    headerTestId?: string
}