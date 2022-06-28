import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ProjetosFeed from '../components/ProjetosFeed';

export default function Business() {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.campoTop}>
                <TextInput style={styles.pesquisa} placeholder="Pesquisar"/>
            </View>

            <ProjetosFeed
            imgUser={require('../assets/user.png')}
            name="ANA CLARA"
            title="Nome do Projeto"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            cover={require('../assets/fundo.png')}
            />

            <ProjetosFeed
            imgUser={require('../assets/user.png')}
            name="ANA CLARA"
            title="Projeto Code"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            cover={require('../assets/fundo.png')}
            />

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#070211',
    },

    campoTop:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        marginBottom:25,
    },

    pesquisa:{
        width:'80%',
        paddingVertical:5,
        paddingHorizontal:13,
        borderRadius:15,
        backgroundColor:'#FCFBFE',
        marginBottom:2,
    },

    blocoPublicacao:{
        paddingVertical:'5%',
        paddingBottom:'10%',
        borderTopWidth:2,
        borderTopColor:'#4B484D',
    },

    campoimg: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:'5%',
    },

    img: {
        width:60, 
        height:60,
        borderRadius: 100,        
    },

    nomeUser: {
        color:'#FCFBFE',
        fontSize:16,
        paddingLeft:'5%',
    },

    botaoPj:{
        borderWidth:2,
        borderRadius:15,
        borderColor:'#4B484D',
        paddingHorizontal:'4%',
        paddingVertical:'1.5%',
        width:'55%',
        marginLeft:'40%',
        alignItems:'center',
        justifyContent:'center',
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