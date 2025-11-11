import React, {useEffect, useRef, useState} from "react";
import { View, Text, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import Rodape from "../Componentes/Rodape";
export default function Camera() {
    const [permissao, requestPermissao] = useCameraPermissions()
    const [uri, setUri] = useState(null)
    const referencia = useRef(null)
    useEffect(()=>{
        if(!permissao) {
            requestPermissao()
        }
    },[])
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
        <Rodape
                        img1={require('../assets/biscoito.png')}
                        img2={require('../assets/calculadora.png')}
                        img3={require('../assets/camera.png')}
                        img4={require('../assets/map.jpg')}
                    />
    </View>)
}