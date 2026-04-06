import { View, Text, StyleSheet} from "react-native";

export default function Saudacao({nome}) {
  return (
        <View style={styles.container}>
            <Text style={styles.text}> Olá, {nome}! Bem-vindo(a) </Text>
        </View>
  );
}
const styles = StyleSheet.create ({
    container: {
      gap: 8,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    text: {
      color: 'purple'
    }
});