import { View } from "react-native";

import { Link } from "react-router-native";

import Subheading from "./Subheading";

const AppBarTab = ({ tabName, path }) => {
  return (
    <View>
      <Link to={path}>
        <Subheading color='white'>{tabName}</Subheading>
      </Link>
    </View>
  );
};

export default AppBarTab;
