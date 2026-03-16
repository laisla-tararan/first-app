import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
    return (
        <View style={styles.container}>
            <View style={styles.blackBox}>
                <View style={styles.cards}>
                    <View style={styles.redBox}></View>
                    <View style={styles.yellowBox}></View>
                    <View style={styles.greenBox}></View>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
    blackBox: {
        padding: 10,
        width: 150,
        height: 400,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: "black",
    },
    cards: {
        flex: 1,
        gap: 40,
        width: 100,
        flexDirection: 'column',
    },
    greenBox: {
        flex: 1,
        borderRadius: 50,
        backgroundColor: "green",
    },
    redBox: {
        flex: 1,
        borderRadius: 100,
        backgroundColor: "red",
    },
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
        borderRadius: 50,
    }
});