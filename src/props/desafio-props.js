import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Botao({titulo}) {
  return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.text}> {titulo} </Text>
            </TouchableOpacity>
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
    },
    botao: {
        backgroundColor: '#bddeed',
        padding: 10,
        justifyContent: 'center',
    }
});