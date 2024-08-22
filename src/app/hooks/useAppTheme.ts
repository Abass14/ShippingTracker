import { useMemo, useState } from "react"
import { Appearance } from "react-native"
import { Colors } from "../../assets/colors"
import { AppColorTheme } from "../../utils/interfaces/Theme.types"

const useAppTheme = () => {
    const [themeMode, setThemeMode] = useState(Appearance.getColorScheme() ?? 'light')

    const appColors: AppColorTheme = useMemo(() => Colors[themeMode], [themeMode])


    return {
        appColors,
        setThemeMode
    }
}

export default useAppTheme