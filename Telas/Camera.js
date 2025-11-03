import React, {useRef, useState} from "react";
import { View, Text, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function Camera() {
    const [permissao, requestPermissao] = useCameraPermissions()
    const [uri, setUri] = useState(null)
    const referencia = useRef(null)
    const tiraFoto = function() {
        referencia.current.takePictureAsync()
            .then(img=>setUri(img.uri))
            .catch(err=>console.error(err))
    }
    if(!permissao?.granted) {
        return(<View><Text>Permissao Negada</Text></View>)
    }
    if(uri) {
        return(<View style={{flex:1}}><Image style={{flex:1}} source={{uri: uri}} /></View>)
    }
    return(<View style={{flex:1}}>
        <CameraView ref={referencia} style={{flex:1}}>
            <Button title="Tirar Foto" onPress={tiraFoto}/>
        </CameraView>
    </View>)
}