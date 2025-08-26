import {Text, TextInput, View} from 'react-native'

export default function Form({texto}) {
    return(
        <View>
            <Text>{texto}</Text>
            <TextInput 
                placeholder='Insira notas de 0 a 10'
                onChangeText={(text)=>console.log(text)}
            />
        </View>
    )
}