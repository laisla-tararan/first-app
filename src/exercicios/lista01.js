import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista01() {
    /** Para o ex.2 */
    const linguagem = 'JavaScript';
    const ano = 2025;

    /** Para o ex.3 */
    const preco = 49.9;
    function formatarPreco(preco) {
        return `Este preço corresponde a R$${preco.toFixed(2)}`
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>
                Lista 01 - Laisla Beatriz do Couto Tararan
            </Text>

            <View style={styles.card}>
                <Text style={styles.label}>
                Exercício 1 - View com Text
                </Text>
                <Text style={styles.texto}> Olá </Text>
                <Text style={styles.texto}> Mundo </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.label}>
                Exercício 2 — Variáveis no JSX
                </Text>
                <Text style={styles.texto}> Linguagem: {linguagem} </Text>
                <Text style={styles.texto}> Ano: {ano} </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.label}>
                Exercício 3 — Função no JSX
                </Text>
                <Text style={styles.texto}> {formatarPreco(preco)} </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingTop: 60,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#8606aa",
    },
    card: {
        backgroundColor: "#FFF",
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#a915c0",
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingBottom: 8,
    },
    texto: {
        fontSize: 14,
        color: "#424242",
        lineHeight: 22,
    },
});