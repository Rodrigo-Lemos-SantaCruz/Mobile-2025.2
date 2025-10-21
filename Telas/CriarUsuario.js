import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from '../Confs/firebase';

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const cadastrar = function() {
    if (senha !== confirmarSenha) {
      setMensagem("As senhas não coincidem!");
      setSucesso(false);
      return;
    }

    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setMensagem("Usuário cadastrado com sucesso!");
        setSucesso(true);
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
      })
      .catch(() => {
        setMensagem("Erro ao cadastrar o usuário. Tente novamente.");
        setSucesso(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={cadastrar} color="#1976d2" />

      {mensagem ? (
        <Text style={sucesso ? styles.sucesso : styles.erro}>
          {mensagem}
        </Text>
      ) : null}

      <Text style={styles.link} onPress={() => navigation.navigate('login')}>
        Já possui uma conta? Faça login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  sucesso: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 15,
  },
  erro: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 15,
  },
  link: {
    marginTop: 20,
    color: '#1976d2',
    fontWeight: 'bold',
  },
});
