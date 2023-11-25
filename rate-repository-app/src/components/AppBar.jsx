import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName='Repositories' />
    </View>
  );
};

export default AppBar;
