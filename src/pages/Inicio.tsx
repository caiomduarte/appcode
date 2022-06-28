import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';

export default function Inicio() {

    const navigation = useNavigation();

    return (
        <RectButton style={styles.container} onPress={() => navigation.navigate('Cadastro | Login') }>
            
            <View style={styles.blocoImg}>
                <View style={styles.campoImg}>
                    <Image source={require('../assets/logo-manas.png')}/>
                </View>
            </View>

            <View>
                <Text style={styles.title}>Manas do Code</Text>
            </View>
        </RectButton>
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

    blocoImg:{
        backgroundColor:'#FFFFFF',
        borderRadius:25,
        paddingHorizontal: -5,
        paddingVertical: -10,
        marginBottom:'70%'
    },

    campoImg:{
        width:'100%',
    },

    title: {
        paddingBottom:'5%',
        color: '#FFFFFF',
        fontWeight:'bold',
    }


});