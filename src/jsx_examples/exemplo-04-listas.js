import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {
    const frutas = ['manga', 'goiaba', 'maçã']

    const alunos = [
        {id: 1, nome: 'Laisla', nota: 10},
        {id: 2, nome: 'Paula', nota: 9},
        {id: 3, nome: 'Beatriz', nota: 4}
    ]

    return (
        <View style={styles.container}> 
            {/* A VIEW É COMO UMA DIV, UM CONTAINER */}
            <Text style={styles.titulo}> Listas e Map </Text>
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}> Map Comum </Text>
                {frutas.map((fruta, index) => (
                    <Text key={index}>
                        {index + 1} - {fruta}
                    </Text>
                ))}
            </View>
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}> Map em Objeto </Text>
                {alunos.map((aluno) => (
                    <Text key={aluno.id}>
                        {aluno.nome} - {aluno.nota}
                    </Text>
                ))}
            </View>
            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}> Map com Filter </Text>
                {alunos.filter((aluno) => aluno.nota >= 7).map((aluno) => (
                    <Text key={aluno.id}> Aprovado: {aluno.nome} - Nota: {aluno.nota} </Text>
                ))}
            </View>
        </View>
  );
}

const styles = StyleSheet.create({ 
    /* PERMITE A CRIAÇÃO PERSONALIZÁVEL, SEM A NECESSIDADE DE CRIAR NOVOS OBJETOS TODA VEZ QUE FOR ESTILIZAR */
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f5f5f5'
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4285f4",
        marginBottom: 8,
    },
    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
});
