import React, {useState} from 'react'
import {View, Text, Image, Button, StyleSheet} from 'react-native'
import Rodape from '../Componentes/Rodape'

export default function Biscoito({route}) {
    const [mostra, setMostra] = useState(false)
    const [fraseInspiradora, setFraseInspiradora] = useState('')
    console.log(route.params)
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
        <View style={styles.container}>
            <Text style={styles.boasVindas}>Olá {route.params.nome}, vamos ler sua sorte?</Text>
            { mostra ? <Image style={styles.imagem} source={require('../assets/biscoitoAberto.png')}/> : <Image style={styles.imagem} source={require('../assets/biscoitoFechado.png')} />}
            <Text style={styles.frase}>{fraseInspiradora}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boasVindas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1976d2',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  frase: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  }
})