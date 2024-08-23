import BottomSheet from "@gorhom/bottom-sheet"
import { useCallback, useRef } from "react"

const useBottomSheet = () => {
    const bottomSheetRef = useRef<BottomSheet | null>(null)

    const openBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current?.expand()
        }
    }

    const closeBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current?.close()
        }
    }

    const snapToPosition = (index: number) => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current?.snapToIndex(index)
        }
    }

    const handleSheetChanges = useCallback((index: number) => {

    }, [])

    return {
        bottomSheetRef,
        openBottomSheet,
        closeBottomSheet,
        snapToPosition,
        handleSheetChanges
    }
}

export default useBottomSheet