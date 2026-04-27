import { useEffect, useState } from "react";
import { Alert, View, Text, Button, StyleSheet } from "react-native";

export default function TelaMoeda(){
    // 1. Cria a variável "moedas" (começa em 0) e a função "setMoedas" para atualizar o valor.
    const [moedas, setMoedas] = useState(0);

    // 2. O "Vigia": Ele fica de olho no que acontece no componente.
    useEffect(() => {
        // Se a quantidade de moedas chegar a 5...
        if (moedas === 5){
            // ...dispara este aviso na tela.
            Alert.alert('Sucesso!', 'Você desbloqueou o baú!')
        }
        
        // [moedas] diz ao React: "Só execute esse código quando a variável moedas mudar".
    }, [moedas]);

    return (
        <View style={styles.container}>
            {/* 3. Mostra o valor atual das moedas na tela */}
            <Text style={styles.texto}>Moedas coletadas: {moedas}</Text>
            
            {/* 4. Ao clicar, pega o valor atual e soma +1 */}
            <Button 
                title="Pegar Moeda" 
                onPress={() => setMoedas(moedas + 1)} 
            />
        </View>
    )
}

// Estilização básica para centralizar tudo
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    texto: { fontSize: 24, marginBottom: 20 },
});