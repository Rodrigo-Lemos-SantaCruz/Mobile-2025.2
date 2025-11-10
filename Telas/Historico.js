import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getDatabase, ref, get } from "firebase/database";
import firebase from "../Confs/firebase";

export default function Historico() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebase);
    const caminho = ref(database, "notas/");

    get(caminho)
      .then((resp) => {
        const dados = resp.val();
        const lista = dados
          ? Object.keys(dados).map((key) => ({
              id: key,
              ...dados[key],
            }))
          : [];

        setNotas(lista);
        console.log(lista)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Notas</Text>

      <FlatList
        data={notas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item.id}</Text>
            <Text style={styles.texto}>Prova: {item.notaProva}</Text>
            <Text style={styles.texto}>Trabalho: {item.notaTrabalho}</Text>
            <Text style={styles.texto}>Final: {item.notaFinal}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fafafa",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    backgroundColor: "#e3f2fd",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
  },
});
