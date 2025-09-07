import {View, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Rodape({img1, img2}) {
    const navigation = useNavigation()

    return(
        <View>
            <Pressable onPress={()=>navigation.navigate('biscoito', {nome: 'Rodrigo', idade: 30})}>
                <Image source={img1} />
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('notas')}>
                <Image source={img2} />
            </Pressable>
        </View>
    )
}