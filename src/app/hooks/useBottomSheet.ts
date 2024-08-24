import { useRef } from "react"
import { Modalize } from "react-native-modalize"

const useBottomSheet = () => {
    const bottomSheetRef = useRef<Modalize | null>(null)

    const openBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current?.open()
        }
    }

    const closeBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current?.close()
        }
    }

    return {
        bottomSheetRef,
        openBottomSheet,
        closeBottomSheet,
    }
}

export default useBottomSheet