import {View, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/exemplos/stack_navigation";
import StackNavigator from "./navigation/exemplos/stack_navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
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