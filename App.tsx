import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./src/app/navigation/main";
import { Provider } from "react-redux";
import store from "./src/app/store/store";

const App = () => {

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <Main />
      </GestureHandlerRootView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App