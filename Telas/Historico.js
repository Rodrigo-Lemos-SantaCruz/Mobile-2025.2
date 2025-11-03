import React, {useEffect} from "react";
import { View, Text } from "react-native";
import { getDatabase, ref, get } from "firebase/database";
import firebase from "../Confs/firebase";

export default function Historico() {
    useEffect(()=>{
        const database = getDatabase(firebase)
        const caminho = ref(database, 'notas/')
        get(caminho)
            .then(resp => console.log(resp.val())
            )
            .catch(err => console.error(err))
    }, [])
    return(<View>

    </View>)
}