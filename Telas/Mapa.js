import React, {useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps';
import Rodape from '../Componentes/Rodape';

export default function Mapa() {
    const [status, setStatus] = useState(null)
    const [localizacao, setLocalizacao] = useState(false)
    useEffect(()=>{
        Location.requestForegroundPermissionsAsync()
            .then(resPerm=>setStatus(resPerm.status))
            .catch(err=>console.error(err))
    }, [])
    const recuperaLoc = function() {
        Location.getCurrentPositionAsync({})
            .then(resp=>setLocalizacao(resp))
            .catch(err => console.error(err))
    }
    return(<View style={{flex:1}}>
        <Text>{status}</Text>
        {localizacao && <MapView 
            style={{flex: 1}}
            initialRegion={{
                latitude: localizacao.coords.latitude,
                longitude: localizacao.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}}
        >
            <Marker
            coordinate={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude,
            }}
            title="Você está aqui"
          />
        </MapView>}
        <Button title='Recuperar Local' onPress={recuperaLoc} />
        <Rodape
                        img1={require('../assets/biscoito.png')}
                        img2={require('../assets/calculadora.png')}
                        img3={require('../assets/camera.png')}
                        img4={require('../assets/map.jpg')}
                    />
    </View>)
}