import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
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
        <View>
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
            {aparece ? <Text>A sua nota final é {nota}</Text> : null}
            <Rodape 
                img1={require('../assets/biscoito.png')}
                img2={require('../assets/calculadora.png')}    
            />
        </View>
    )
}