import { View, Text, StyleSheet} from "react-native";

export default function CartaoPerfil({nome, idade}) {
  return (
        <View style={styles.container}>
            <Text style={styles.text}> {nome} - {idade} anos </Text>
        </View>
  );
}
const styles = StyleSheet.create ({
    container: {
      gap: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    text: {
      color: 'purple'
    }
  });