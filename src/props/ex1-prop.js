import { View, Text, StyleSheet} from "react-native";

export default function CardProduto(props) {
  return (
        <View style={styles.container}>
            <Text style={styles.text}> Produto: {props.produto} </Text>
            <Text style={styles.text}> Preço: R$ {props.preco} </Text>
        </View>
  );
}
const styles = StyleSheet.create ({
    container: {
      gap: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    text: {
      color: 'purple'
    }
});