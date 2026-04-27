import {View, StyleSheet} from "react-native";
import ContadorExample from "./hooks/useState_example";
import TelaDeLogin from "./hooks/useRef_example";
import TelaMoeda from "./hooks/useEffect_example";
import Recados from "./hooks/exercicio-recados";

export default function App() {
  return (
    <View style={styles.container}>
      <Recados/>
    </View>
  );
};

  const styles = StyleSheet.create ({
    container: {
      gap: 10,
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }
  });