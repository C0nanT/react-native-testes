import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import logo from "../../assets/logo.png";
export default function Topo() {
  return (
    <View style={styles.topoContainer}>
      <StatusBar style="light" />
      <Image style={styles.imagem} source={logo} />
      <Text style={styles.textOla}>Olá Conan</Text>
      <Text style={styles.legenda}>Encontre os melhores produtores</Text>
    </View>
  );
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
