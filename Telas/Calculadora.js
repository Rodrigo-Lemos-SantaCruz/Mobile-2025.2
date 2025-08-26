import {View, Text, TextInput, Button} from 'react-native'
import Form from '../Componentes/Form'
import Rodape from '../Componentes/Rodape'

export default function Calculadora() {
    var nota = 8
    return (
        <View>
            <Form texto='Nota da Prova: ' />
            <Form texto='Nota do Trabalho: ' />
            <Button 
                title='Calcular'
                onPress={()=>console.log('Botão apertado')}
            />
            <Text>A sua nota final é {nota}</Text>
            <Rodape 
                img1={require('../assets/biscoito.png')}
                img2={require('../assets/calculadora.png')}    
            />
        </View>
    )
}