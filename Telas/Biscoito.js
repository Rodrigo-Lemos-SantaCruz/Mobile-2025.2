import React, {useState, useEffect} from 'react'
import {View, Text, Image, Button, StyleSheet} from 'react-native'
import Rodape from '../Componentes/Rodape'

export default function Biscoito({route}) {
    const [mostra, setMostra] = useState(false)
    const [fraseInspiradora, setFraseInspiradora] = useState('')
    useEffect(()=>{
      if (mostra) {
        fetch('https://techy-api.vercel.app/api/json')
          .then(resp => resp.json())
          .then(obj => setFraseInspiradora(obj.message))
          .catch(err => console.error('Erro: '+err))
      }
    }, [mostra])
    const executaAcao = function() {
        if(mostra) {
            setFraseInspiradora('')
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