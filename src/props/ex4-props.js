import { View, Text, StyleSheet} from "react-native";

export default function PerfilAluno({nome, turma, matricula}) {
  return (
        <View style={styles.container}>
            <Text style={styles.text}> Nome: {nome}</Text>
            <Text style={styles.text}> Turma: {turma}</Text>
            <Text style={styles.text}> Matrícula: {matricula}</Text>
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