import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';

export default function Equipe() {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>NOME PROJETO</Text>
            
            <View style={styles.campoimg}>
                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('Perfil') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Ana Clara</Text>
                </RectButton>

                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('Perfil') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Ana Clara</Text>
                </RectButton>

                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('Perfil') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Ana Clara</Text>
                </RectButton>

                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('Perfil') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Ana Clara</Text>
                </RectButton>

                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('Perfil') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Ana Clara</Text>
                </RectButton>

                <RectButton style={styles.bperfil} onPress={() => navigation.navigate('Perfil') }>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser} >Ana Clara</Text>
                </RectButton>

            </View>

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
        marginBottom:'2%',
        marginTop:'5%'
    },    

    campoimg: {
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        padding:'5%',
        marginTop:'10%'
    },

    bperfil: {
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginBottom: 20,
    },
    
    img: {
        width:80, 
        height:80,
        borderRadius: 100,        
    },
    
    nomeUser: {
        color:'#FCFBFE',
        fontSize:20,
        padding:'5%',
        marginLeft:'3%',
    },

});