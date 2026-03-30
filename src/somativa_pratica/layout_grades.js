import { StyleSheet, Text, View } from "react-native";

export default function Exercicio1() {
    return <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.yellowBox}>
                <Text style={styles.textStyle}> Amarelo </Text>
            </View>
            <View style={styles.blueBox}>
                <Text style={styles.textStyle}> Azul </Text>
            </View>
        </View>
        <View style={styles.areaCentral}>
            <View style={styles.greenBox}>
                <Text style={styles.textStyle}> Verde </Text>
            </View>
            <View style={styles.colunaLateral}>
                <View style={styles.orangeBox}>
                    <Text style={styles.textStyle}> Laranja </Text>
                </View>
                <View style={styles.pinkBox}>
                    <Text style={styles.textStyle}> Rosa </Text>
                </View>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.redBox}>
                <Text style={styles.textStyle}> Vermelho </Text>
            </View>
            <View style={styles.tealBox}>
                <Text style={styles.textStyle}> Teal </Text>
            </View>
            <View style={styles.purpleBox}>
                <Text style={styles.textStyle}> Roxo </Text>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 8,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    orangeBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBox: {
        flex: 3,
        borderRadius: 10,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    yellowBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    pinkBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },
    redBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    tealBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "teal",
        alignItems: "center",
        justifyContent: "center",
    },
    purpleBox: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: 'row',
        height: 100,
        gap: 8,        
    },
    areaCentral: {
        flexDirection: 'row',
        flex: 1,
        gap: 8,
    },
    colunaLateral: {
        flexDirection: 'column',
        flex: 1,
        gap: 8,
    },
});