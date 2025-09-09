import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import Form from '../Componentes/Form'
import Rodape from '../Componentes/Rodape'

export default function Calculadora() {
    const [nota, setNota] = useState(8)
    const [aparece, setAparece] = useState(false)
    const [notaProva, setNotaProva] = useState(null)
    const [notaTrabalho, setNotaTrabalho] = useState(null)

    const apertaBotao = function() {
        setNota(0.7*notaProva+0.3*notaTrabalho)
        setAparece(true)
    }

    return (
        <View style={styles.container}>
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