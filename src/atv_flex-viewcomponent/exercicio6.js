import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
    return (
        <View style={styles.container}>
            <View style={styles.greenBox}>
                <Text style={styles.textStyle}> Header </Text>
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.textStyle}> Main Content </Text>
            </View>
            <View style={styles.blueBox}>
                <Text style={styles.textStyle}> Footer  </Text>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
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
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueBox: {
        backgroundColor: "blue",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaUnica: {
        height: 120,
        width: 120,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    mainContent: {
        backgroundColor: "gray",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});