import { View, Text, StyleSheet} from "react-native";

export default function CartaoUsuario({nome, email}) {
  return (
        <View style={styles.container}>
            <Text style={styles.text}> Usuário: {nome} - Email: {email} </Text>
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