import { StyleSheet, Text, View } from "react-native";

export default function Exercicio2() {
    return <View style={styles.container}>
        <View style={styles.headerBox}>
            <Text style={styles.textStyle}> Header </Text>
        </View>
        <View style={styles.corpo}>
            <View style={styles.sideBar}>
                <Text style={styles.textStyle}> Side </Text>
            </View>
            <View style={styles.areaPrincipal}>
                <View style={styles.superior}>
                    <View style={styles.greenBox}>
                        <Text style={styles.textStyle}> Verde </Text>
                    </View>
                    <View style={styles.blueBox}>
                        <Text style={styles.textStyle}> Azul </Text>
                    </View>
                </View>
                <View style={styles.circulo}></View>
                <View style={styles.inferior}>
                    <View style={styles.redBox}>
                        <Text style={styles.textStyle}> Verm. </Text>
                    </View>
                    <View style={styles.orangeBox}>
                        <Text style={styles.textStyle}> Laranja </Text>
                    </View>
                    <View style={styles.purpleBox}>
                        <Text style={styles.textStyle}> Roxo </Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.footerBox}>
            <Text style={styles.textStyle}> Footer </Text>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        padding: 8,
        alignSelf: 'stretch',
        backgroundColor: '#1a1a1a',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    redBox: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    orangeBox: {
        flex: 2,
        borderRadius: 8,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    purpleBox: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
    },
    headerBox: {
        height: 60,
        borderRadius: 8,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBox: {
        height: 50,
        borderRadius: 8,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    corpo: {
        flex: 1,
        flexDirection: 'row',
    },
    sideBar: {
        flex: 1,
        width: 80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#95a5a6'
    },
    areaPrincipal: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
        gap: 8,
    },
    superior: {
        flex: 1,
        gap: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    circulo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: '#34495e'
    },
    inferior: {
        flex: 1,
        gap: 8,
        flexDirection: 'row',
    },
});