import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import useAppTheme from "./src/app/hooks/useAppTheme";
import AppText from "./src/app/components/text";
import { AppColorTheme } from "./src/utils/interfaces/Theme.types";
import { TextTypes } from "./src/utils/enum/TextEnums";
import AppButton from "./src/app/components/button";
import Checkbox from "./src/app/components/checkbox";
import AppInput from "./src/app/components/input";
import AppSearchBar from "./src/app/components/search-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppBottomSheet from "./src/app/components/bottomsheet";
import useBottomSheet from "./src/app/hooks/useBottomSheet";
import { ButtonTypes } from "./src/utils/enum/ButtonTypes";
import SplashScreen from "./src/app/features/splash";
import Dashboard from "./src/app/features/dashboard/dashboard";

const App = () => {
  const { appColors, setThemeMode } = useAppTheme()
  const style = styles(appColors)
  const [value, setValue] = useState('')
  const { bottomSheetRef, openBottomSheet } = useBottomSheet()
  const snapPoint = ['1%', '10%', '20%', '30%', '40%']


  return (
    <GestureHandlerRootView style={style.container}>
      {/* <SplashScreen /> */}
      <Dashboard />

      {/* <AppText type={TextTypes.BOLD}>
        Hello, how are you?
      </AppText>
      <AppButton onPress={openBottomSheet}>
        Hello
      </AppButton>
      <Checkbox
        isChecked={false}
        onChecked={() => { }}
      />
      <AppInput
        placeholder="Hello"
        value={value}
        onChangeText={setValue}
        label="Something"
        secureTextEntry
      />
      <AppSearchBar
        placeholder="Hello"
        value={value}
        onChangeText={setValue}
      />
      <AppBottomSheet
        bottomsheetRef={bottomSheetRef}
        snapPoints={snapPoint}
        enablePanDownToClose
        withBackIcon
      >
        <View>
          <AppText>
            Hellow world
          </AppText>
        </View>
      </AppBottomSheet> */}
    </GestureHandlerRootView>
  )
}

const styles = (color: AppColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    // paddingTop: 50,
    gap: 10,
    // padding: 10
  },
  first: {
    flex: 1,
    backgroundColor: color.black,
  },
  second: {
    flex: 1,
    backgroundColor: color.red
  }
})

export default App