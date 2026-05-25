import {View, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/exemplos/stack_navigation";
import StackNavigator from "./navigation/exemplos/stack_navigation";
import BottomTabNavigator from './navigation/exemplos/bottom_tab_navigator';
import DrawerNavigator from "./navigation/exemplos/drawer_navigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create ({
  container: {
    gap: 10,
    padding: 30,
    flex: 1
  }
});