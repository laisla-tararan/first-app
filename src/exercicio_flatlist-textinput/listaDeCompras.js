import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, FlatList } from "react-native";

export default function ListaDeCompras(){
    const [produto, setProduto] = useState('')
    const [listaItens, setListaItens] = useState('')
    const [quantidade, setQuantidade] = useState('')

    function handleAdicionar(){
        if(produto.trim() === ''){
            Alert.alert('Atenção!', 'Digite o nome do produto antes de adicionar.')
            return
        }

        if(quantidade.trim() === ''){
            return
        }

        const novoItem = {
            id: Date.now().toString(),
            nome: produto,
            quantidade: quantidade
        }

        setListaItens([...listaItens, novoItem])
        setProduto('')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Lista de Compras </Text>
            <TextInput
                style={styles.input}
                value={produto}
                onChangeText={setProduto}
                placeholder="Digite um produto..."
            />
            <TextInput
                style={styles.input}
                value={quantidade}
                onChangeText={setQuantidade}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
                <Text style={styles.textoBotao}> Adicionar </Text>
            </TouchableOpacity>
            <FlatList
                scrollEnabled={true}
                data={listaItens}
                keyExtractor={(item) => item.id}
                
            />
        </View>
    )
}