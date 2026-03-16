import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
    return (
        <View style={styles.container}>
            <View style={styles.sideBar}>
                <Text style={styles.textStyle}> SideBar </Text>
            </View>
            <View style={styles.cards}>
                <View style={styles.greenBox}>
                <Text style={styles.textStyle}> Card 1 </Text>
                </View>
                <View style={styles.blueBox}>
                    <Text style={styles.textStyle}> Card 2 </Text>
                </View>
                <View style={styles.yellowBox}>
                    <Text style={styles.textStyle}> Card 3 </Text>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 20,
        flexDirection: 'row'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
    cards: {
        flex: 1,
        gap: 10,
        width: '100%',
        flexDirection: 'column',
    },
    sideBar: {
        flex: 1,
        width: 80,
        backgroundColor: "gray",
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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