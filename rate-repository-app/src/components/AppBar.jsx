import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: "space-around",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarTab tabName='Repositories' path='/' />
        <AppBarTab tabName='Sign in' path='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
