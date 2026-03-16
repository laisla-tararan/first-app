import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}> Header </Text>
            </View>
            <View style={styles.cards}>
                <View style={styles.redBox}>
                    <Text style={styles.textStyle}>1</Text>
                </View>
                <View style={styles.yellowBox}>
                    <Text style={styles.textStyle}>2</Text>
                </View>
                <View style={styles.greenBox}>
                    <Text style={styles.textStyle}>3</Text>
                </View>
            </View>
            <View style={styles.painelPrincipal}>

            </View>
            <View style={styles.painelLateral}>

            </View>
            <View style={styles.footer}>

            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
    header: {
        height: 50,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#00008B',
    },
    cards: {
        flex: 1,
        gap: 40,
        width: '100%',
        flexDirection: 'row'
    },
    greenBox: {
        flex: 1,
        backgroundColor: "green",
    },
    redBox: {
        flex: 1,
        backgroundColor: "red",
    },
    yellowBox: {
        flex: 1,
        backgroundColor: "yellow",
    }
});