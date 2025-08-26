import {View, Text, TextInput, Button} from 'react-native'

export default function Calculadora() {
    var nota = 8
    return (
        <View>
            <Text>Nota da Prova</Text>
            <TextInput
                placeholder='Notas de 0 a 10'
                onChangeText={(text)=>console.log(text)}
            />
            <Text>Nota do Trabalho</Text>
            <TextInput
                placeholder='Notas de 0 a 10'
                onChangeText={(text)=>console.log(text)}
            />
            <Button 
                title='Calcular'
                onPress={()=>console.log('Botão apertado')}
            />
            <Text>A sua nota final é {nota}</Text>
            
        </View>
    )
}