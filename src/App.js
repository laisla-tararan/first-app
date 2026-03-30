import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista01 from './exercicios/lista01';
import Lista02 from './exercicios/lista02';
import Lista03 from './exercicios/lista03';
import ViewExample from './basic_components/view_example01'
import ExercicioView01 from './atv_flex-viewcomponent/exercicio1';
import ExercicioView02 from './atv_flex-viewcomponent/exercicio2';
import ExercicioView03 from './atv_flex-viewcomponent/exercicio3';
import ExercicioView04 from './atv_flex-viewcomponent/exercicio4';
import ExercicioView05 from './atv_flex-viewcomponent/exercicio5';
import ExercicioView06 from './atv_flex-viewcomponent/exercicio6';
import ExercicioView07 from './atv_flex-viewcomponent/exercicio7';
import ExercicioView08 from './atv_flex-viewcomponent/exercicio8';
import ExercicioView09 from './atv_flex-viewcomponent/exercicio9';
import ExercicioView10 from './atv_flex-viewcomponent/exercicio10';
//somativa
import Exercicio1 from './somativa_pratica/layout_grades';
import Exercicio2 from './somativa_pratica/painel_divisor';

export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
