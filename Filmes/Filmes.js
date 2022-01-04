import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from './Detalhes/Detalhe';

export default function Filmes({data}) {

    const [visibleModal,setVisibleModal] = useState(false)

    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>
            <Image 
                style={styles.foto}
              source ={{ uri: data.foto}}  
            />
            <View>
                <TouchableOpacity style={styles.areaBtn} onPress={() => setVisibleModal(true)}>
                    <Text style={styles.btnText}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} animationType='slide' visible={visibleModal}>
                <Detalhes filme={data} voltar={() => setVisibleModal(false)}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin:10,
        justifyContent:'center',
    
    },

    foto:{
        height:250,
        width: 350,
    },

    titulo:{
        marginTop:5,
        padding:5,
        fontSize:20,
        fontWeight:'bold',
    },

    areaBtn: {
        alignItems:'flex-end',
        marginTop: -18,
        
    },
    
    btnText: {
        fontWeight:'bold',
        backgroundColor:'#09A6FF',
        width:84,
        textAlign:'right',
        padding:8,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        color: '#fff'
    },


});
