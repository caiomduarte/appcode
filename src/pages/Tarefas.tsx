import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Tarefas() {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>NOME PROJETO</Text>
            
            <View style={styles.blocoTarefa}>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text style={styles.tituloTarefa}>TAREFAS</Text>
                
                <Text style={styles.text}>PENDENTE</Text>
                <View style={styles.task}></View>

                <Text style={styles.text}>EM PROCESSO</Text>
                <View style={styles.task}></View>

                <Text style={styles.text}>CONCLUÍDO</Text>
                <View style={styles.task}></View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('') }>
                <Text style={styles.textButton}>TAREFAS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Equipe') }>
                <Text style={styles.textButton}>EQUIPE</Text>
            </TouchableOpacity>

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
        textAlign:'justify',
    },

    title: {
        color:'#FCFBFE',
        fontSize:24,
        marginBottom:'2%',
        marginTop:'5%'
    },

    tituloTarefa:{
        fontSize:20,
        textAlign:'center',
        marginTop:'12%',
        marginBottom:'15%',
    },

    blocoTarefa:{
        width:'80%',
        marginBottom:'10%',
    },

    text:{
        fontSize:16,
        marginTop:15,
        textAlign:'justify',
    },

    task:{
        width:'100%',
        borderWidth:2,
        borderBottomColor:'#4B484D',
        marginBottom:'15%',
    },

    button: {
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:20,
        marginBottom:'15%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },


})