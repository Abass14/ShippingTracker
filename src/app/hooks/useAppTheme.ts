import { useMemo, useState } from "react"
import { Appearance } from "react-native"
import { Colors } from "../../assets/colors"
import { AppColorTheme } from "../../utils/interfaces/Theme.types"

/**Hook for returning app colors based on dark/light mode */
const useAppTheme = () => {
    const [themeMode, setThemeMode] = useState(Appearance.getColorScheme() ?? 'light')

    const appColors: AppColorTheme = useMemo(() => Colors[themeMode], [themeMode])


    return {
        appColors,
        setThemeMode
    }
}

export default useAppTheme