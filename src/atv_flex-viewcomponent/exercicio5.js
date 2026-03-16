import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
    return (
        <View style={styles.container}>
            <View style={styles.blueBox}>
                <Text style={styles.textStyle}> Coluna 1  </Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.textStyle}> Coluna 2 </Text>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
    redBox: {
        height: 80,
        width: 80,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        backgroundColor: "green",
        flex: 1,
        justifyContent: 'center'
    },
    blueBox: {
        backgroundColor: "blue",
        flex: 1,
        justifyContent: 'center'
    },
    caixaUnica: {
        height: 120,
        width: 120,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    }
});