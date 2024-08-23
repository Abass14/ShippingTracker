import { BottomSheetProps } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { ReactNode, RefObject } from "react";

export interface IBottomSheet extends Omit<BottomSheetProps, 'children'> {
    title?: string
    onDone?: () => void
    withBackIcon?: boolean
    bottomsheetRef: RefObject<BottomSheet>
    children: ReactNode
}