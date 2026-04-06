import {View, StyleSheet} from "react-native";
import CartaoPerfil from "./props/cartao-perfil";
import CardProduto from "./props/ex1-prop";
import CartaoUsuario from "./props/ex2-props";
import Saudacao from "./props/ex3-props";
import PerfilAluno from "./props/ex4-props";
import Botao from "./props/desafio-props";

export default function App() {
  return (
    <View style={styles.container}>
      <Botao titulo="entrar"/>
      <Botao titulo="sair"/>
      <Botao titulo="cadastrar"/>
    </View>
  );
};

  const styles = StyleSheet.create ({
    container: {
      gap: 10,
      padding: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });