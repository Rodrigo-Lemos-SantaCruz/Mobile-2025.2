import React, {useState} from 'react'
import {View, Text, Image, Button} from 'react-native'
import Rodape from '../Componentes/Rodape'

export default function Biscoito() {
    const [mostra, setMostra] = useState(false)
    const [fraseInspiradora, setFraseInspiradora] = useState('')
    
    const executaAcao = function() {
        if(mostra) {
            setFraseInspiradora('')
        }
        else{
            const frases = [
                 "A persistência leva ao sucesso.",
                 "Hoje é um bom dia para aprender algo novo.",
                 "A prática leva à perfeição.",
                 "Cada erro é uma oportunidade de aprendizado.",
                 "Acredite no seu potencial."
            ]
            var posicao = Math.floor(Math.random() * frases.length)
            setFraseInspiradora(frases[posicao])
        }
        setMostra(!mostra)
    }

    return (
        <View>
            <Text>Biscoito da Sorte</Text>
            { mostra ? <Image source={require('../assets/biscoitoAberto.png')}/> : <Image source={require('../assets/biscoitoFechado.png')} />}
            <Text>{fraseInspiradora}</Text>
            <Button
                title={mostra ? 'Reiniciar' : 'Abrir Biscoito'}
                onPress={()=>executaAcao()}
            />
            <Rodape
                img1={require('../assets/biscoito.png')}
                img2={require('../assets/calculadora.png')}
            />
        </View>
    )
}