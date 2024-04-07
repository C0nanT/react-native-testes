import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import logo from "../../assets/logo.png";
import { carregaProdutores, carregaTopo } from "../../servicos/dados.js";
class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: "",
      legenda: "",
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={styles.topoContainer}>
        <StatusBar style="light" />
        <Image style={styles.imagem} source={logo} />
        <Text style={styles.textOla}>{this.state.topo.boasVindas}</Text>
        <Text style={styles.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topoContainer: {
    backgroundColor: "#f6f6f6",
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 20,
  },
  textOla: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#999",
  },
});

export default Topo;
