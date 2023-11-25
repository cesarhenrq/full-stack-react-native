import { View, Pressable } from "react-native";

import Subheading from "./Subheading";

const AppBarTab = ({ tabName }) => {
  return (
    <View>
      <Pressable>
        <Subheading color='white'>{tabName}</Subheading>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
