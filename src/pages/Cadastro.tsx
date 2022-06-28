import React,  {useState, useEffect} from 'react';

import { View, Alert, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

//Importando o AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//Importante o arquivo API
import api from '../services/api';

export default function Cadastro() {

    //const dataKey = '@code:users';

    const navigation = useNavigation();

 
     

    //Fazer Login
    function goLogin()
    {
        navigation.navigate('Login')
    }



 


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>ESCOLHA UM TIPO DE CONTA</Text>             
            

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Conta Business')}>
                    <Text style={styles.textButton}>CONTA BUSINESS</Text>
                </TouchableOpacity>
                   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Descrição de perfil')}>
                    <Text style={styles.textButton}>CONTA USUÁRIO</Text>
                </TouchableOpacity>

                
                <Text style={styles.textRodape} onPress={goLogin}>LOGIN</Text>
            
        
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor:'#070211',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center',
    },

    title: {
        color:'#FCFBFE',
        fontSize:24,
        marginBottom:'20%',
        marginTop:'5%'
    },

    campoForm: {
        borderColor:'#68656A',
        width:'80%',
        borderBottomWidth:2,
        color:'#FCFBFE',
        fontSize:16,
        marginBottom:'10%',
    },

    button: {
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:5,
        marginBottom:'10%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

    textRodape: {
        color:'#FCFBFE',
        fontSize:14,
        marginBottom:15
    }

})