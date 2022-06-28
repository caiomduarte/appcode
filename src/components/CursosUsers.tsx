import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CursosUsers(c) {

    const navigation = useNavigation();

    return (
        <View style={styles.blocoPublicacao}>
            <View style={styles.campoText}>
                <Text style={styles.textPj}>{c.title}</Text>
                <Text style={styles.descricaoPj}>{c.description}</Text>
            </View>
            <View style={styles.campoImgPj}>
                <Image style={styles.imgPj} source={c.cover}/>
            </View>
            <View style={styles.campoBotaoPj}>
                <TouchableOpacity style={styles.botaoPj}>
                    <Text style={styles.textBotaoPj}>INSCREVER-SE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    
    blocoPublicacao:{
        paddingVertical:'5%',
        paddingBottom:'10%',
        borderTopWidth:2,
        borderTopColor:'#4B484D',
    },

    botaoPj:{
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
        paddingVertical:20,
        marginLeft:170,
        marginRight: 20,
        flexDirection:'row',
    },

    campoBotaoPj:{
        marginBottom:'2%',
    },

    textBotaoPj:{
        color:'#FCFBFE',
        fontSize:10,
    },

    imgBotao:{
        width:30,
        height:30,
        marginLeft:5,
    },

    campoText:{
        padding:'5%',
    },

    textPj:{
        color:'#FCFBFE',
        fontSize:14,
    },

    descricaoPj:{
        color:'#FCFBFE',
        fontSize:14,
        marginTop:'2%',
        textAlign:'justify',        
    },

    campoImgPj:{
        paddingHorizontal:'5%'
    },

    imgPj:{
        width:'100%',
        height:150,
    },
    
});