import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
    return (
        <View style={styles.container}>
            <View style={styles.linha1}>
                <View style={styles.redBox}></View>
                <View style={styles.blueBox}></View>
            </View>
            <View style={styles.linha2}>
                <View style={styles.yellowBox}></View>
                <View style={styles.greenBox}></View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 20,
    },
    linha1: {
        flex: 1,
        gap: 20,
        width: '100%',
        flexDirection: 'row'
    },
    linha2: {
        flex: 1,
        gap: 20,
        width: '100%',
        flexDirection: 'row'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
    redBox: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueBox: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center'
    },
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    }
});