import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Form from '../Componentes/Form'
import Rodape from '../Componentes/Rodape'
import { getDatabase, ref, set } from 'firebase/database'
import firebase from '../Confs/firebase'

export default function Calculadora() {
    const [nota, setNota] = useState(8)
    const [aparece, setAparece] = useState(false)
    const [notaProva, setNotaProva] = useState(null)
    const [notaTrabalho, setNotaTrabalho] = useState(null)
    const [disciplina, setDisciplina] = useState('')
    const navigation = useNavigation()
    const apertaBotao = function() {
        setNota(0.7*parseFloat(notaProva)+0.3*parseFloat(notaTrabalho))
        setAparece(true)
    }
    const salvarDados = function() {
        const database = getDatabase(firebase)
        const caminho = ref(database, "notas/"+disciplina)
        set(caminho, {'notaProva': notaProva, 'notaTrabalho': notaTrabalho, 'notaFinal': nota})
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
    }
    return (
        <View style={styles.container}>
            <Form 
                texto='Disciplina: ' 
                funcao={setDisciplina} 
            />
            <Form 
                texto='Nota da Prova: ' 
                funcao={setNotaProva} 
            />
            <Form 
                texto='Nota do Trabalho: ' 
                funcao={setNotaTrabalho}
            />
            <Button 
                title='Calcular'
                onPress={()=>apertaBotao()}
            />
            <Button 
                title='Salvar'
                onPress={()=>salvarDados()}
            />
            <Button 
                title='Histórico Escolar'
                onPress={()=>navigation.navigate('historico')}
            />
            {aparece ? <Text style={styles.resultado}>A sua nota final é {nota}</Text> : null}
            <Rodape 
                img1={require('../assets/biscoito.png')}
                img2={require('../assets/calculadora.png')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80, // evita sobreposição do rodapé
  },
  resultado: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
    fontWeight: 'bold',
  },
})