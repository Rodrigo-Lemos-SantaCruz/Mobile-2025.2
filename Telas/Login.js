import React, {useState} from "react"; 
import {View, TextInput, Button, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../Confs/firebase'

export default function Login() {
  const navigation = useNavigation()    
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [msg, setMsg] = useState(false)
  const autentica = function() {
    const auth = getAuth(firebase)
    signInWithEmailAndPassword(auth, email, senha)
      .then(resp => { 
        navigation.navigate('biscoito', {nome: resp.user.email, idade: 30}) 
      })
      .catch(err => {
        setMsg(true)
        console.error(err)})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acesse sua conta</Text>
      {msg ? <Text style={[styles.titulo, {color: 'red'}]}>Usuário ou senha incorretos</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text)=>setSenha(text)}
        secureTextEntry
      />
      <Button title="Entrar" onPress={()=>autentica()} color="#1976d2" />
      <Button title="Criar usuário" onPress={()=>navigation.navigate('cadastro')} color="#1976d2" />
    </View>
  )
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
})
