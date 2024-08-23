import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import useAppTheme from "./src/app/hooks/useAppTheme";
import { AppColorTheme } from "./src/utils/interfaces/Theme.types"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./src/app/navigation/main";
import SplashScreen from "react-native-splash-screen"

if (Platform.OS === 'android') {
  SplashScreen.show()
}
const App = () => {
  const { appColors } = useAppTheme()
  const style = styles(appColors)

  return (
    <GestureHandlerRootView style={style.container}>
      <Main />
    </GestureHandlerRootView>
  )
}

const styles = (color: AppColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
})

export default App