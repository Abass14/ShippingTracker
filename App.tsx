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

const App = () => {
  const { appColors, setThemeMode } = useAppTheme()
  const style = styles(appColors)
  const [value, setValue] = useState('')

  return (
    <View style={style.container}>
      <AppText type={TextTypes.BOLD}>
        Hello, how are you?
      </AppText>
      <AppButton>
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
      />
      <AppSearchBar
        placeholder="Hello"
        value={value}
        onChangeText={setValue}
      />
    </View>
  )
}

const styles = (color: AppColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: 50,
    gap: 10,
    padding: 10
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