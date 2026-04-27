import {View, Text, TextInput, StyleSheet} from "react-native"
import {useRef} from "react"

export default function TelaDeLogin(){
    const senhaRef=useRef(null);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Login </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui seu e-mail"
                keyboardType="email-address" //teclado para email
                returnKeyType="next"//enter vai para o próximo campo
                onSubmitEditing={() => senhaRef.current?.focus()} //serve para "pular" de um campo para o outro automaticamente quando o usuário termina de digitar.
            />
            <TextInput
                style={styles.input}
                placeholder="Digite aqui sua senha"
                secureTextEntry={true} //esconde a senha
                returnKeyType="send"//enter manda
                ref={senhaRef}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
});