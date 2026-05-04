import {View, StyleSheet} from "react-native";
import ContadorExample from "./hooks/useState_example";
import TelaDeLogin from "./hooks/useRef_example";
import TelaMoeda from "./hooks/useEffect_example";
import Recados from "./hooks/exercicio-recados";
import FormularioExemplos from "./text_input/formulario";
import FlatListExemplo from "./flatlist/flatlist";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListExemplo/>
    </View>
  );
};

  const styles = StyleSheet.create ({
    container: {
      gap: 10,
      padding: 30,
      flex: 1
    }
  });