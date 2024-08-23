import React from "react";
import { StyleSheet } from "react-native";
import useAppTheme from "./src/app/hooks/useAppTheme";
import { AppColorTheme } from "./src/utils/interfaces/Theme.types"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./src/app/navigation/main";

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