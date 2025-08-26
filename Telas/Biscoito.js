import {View, Text, Image, Button} from 'react-native'
import Rodape from '../Componentes/Rodape'

export default function Biscoito() {
    var fraseInspiradora = 'Uma frase de chines'
    return (
        <View>
            <Text>Biscoito da Sorte</Text>
            <Image source={require('../assets/biscoito.png')} />
            <Text>{fraseInspiradora}</Text>
            <Button
                title='Ver Frase'
                onPress={()=>console.log('Frase sorteada')}
            />
            <Rodape
                img1={require('../assets/biscoito.png')}
                img2={require('../assets/calculadora.png')}
            />
        </View>
    )
}