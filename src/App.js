import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista01 from './exercicios/lista01';
import Lista02 from './exercicios/lista02';
import Lista03 from './exercicios/lista03';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista03/>
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
