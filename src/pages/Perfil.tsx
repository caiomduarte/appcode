import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {

    const navigation = useNavigation();

    return (

        <ScrollView>
        <View style={styles.container}>
            <View style={styles.containerTopo}>
                <ImageBackground style={styles.imgCapa} source={require('../assets/fundo.png')}>
                <View style={styles.campoimg}>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <Text style={styles.nomeUser}>ANA CLARA</Text>
                </View>
                </ImageBackground>
            </View>

            <View style={styles.blocoInfo}>
                <TouchableOpacity style={styles.botaoMais}>
                    <Text style={styles.textBotaoMais}>INCREMENTAR</Text>
                    <Image style={styles.imgBotao} source={require('../assets/mais.png')}/>
                </TouchableOpacity>
                <Text style={styles.text}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
            </View>

            <View style={styles.blocoInfo}>
                <Text style={styles.title}>Contato</Text>
                <View style={styles.campoText}>
                <Text onPress={() => navigation.navigate('home') }>Detalhe</Text>
                    <Text style={styles.text}>Celular: (11) 9 6391-5976 </Text>
                    <Text style={styles.text}>Email: anaclara@outlook.com</Text>
                </View>
            </View>

            <View style={styles.blocoInfo}>
                <Text style={styles.title}>Experiência</Text>
                <View style={styles.campoText}>
                    <Text style={styles.text}>- Estagiário</Text>
                    <Text style={styles.text}>Prefeitura de Santana de Parnaíba</Text> 
                    <Text style={styles.text}>dez de 2019</Text>
                </View>

                <Text style={styles.title}>Formação Acadêmica</Text>
                <View style={styles.campoText}>
                    <Text style={styles.text}>- FATEC Santana de Parnaíba</Text>
                    <Text style={styles.text}>Graduação, Análise e Desenvolvimento de Sistemas</Text> 
                    <Text style={styles.text}>2019 -2022</Text>
                </View>
                <View style={styles.campoText}>
                    <Text style={styles.text}>- FATEC Santana de Parnaíba</Text>
                    <Text style={styles.text}>Graduação, Análise e Desenvolvimento de Sistemas</Text> 
                    <Text style={styles.text}>2019 -2022</Text>
                </View>
            </View>

            <View  style={styles.blocoInfo}>
                <Text style={styles.title}>Competências</Text>
                <View style={styles.campoText}>
                    <Text style={styles.text}>-HTML</Text>
                    <Text style={styles.text}>-CSS</Text>
                    <Text style={styles.text}>-Miicrosoft Office</Text>
                    <Text style={styles.text}>-PHP</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#070211',
    },

    headerMenu:{
        backgroundColor:'rgba(171, 145, 220, 0.26)',
    },

    containerTopo:{
        height:250,
    },

    imgCapa:{
        width:'100%', 
        height:180,
    },

    campoimg: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:'5%',
        marginTop:'30%'
    },

    img: {
        width:128, 
        height:128,
        borderRadius: 100,        
    },

    nomeUser: {
        color:'#FCFBFE',
        fontSize:20,
        paddingLeft:'5%',
        paddingTop:'8%',
    },

    botaoMais:{
        borderWidth:2,
        borderRadius:15,
        borderColor:'#4B484D',
        paddingHorizontal:'10%',
        paddingVertical:'2%',
        width:'55%',
        marginLeft:'40%',
        marginBottom:'5%',
        alignItems:'center',
        flexDirection:'row',
    },

    textBotaoMais:{
        color:'#FCFBFE',
        fontSize:10,
        
    },

    imgBotao:{
        width:30,
        height:30,
        marginLeft:5,
    },

    blocoInfo:{
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'#4B484D',
        paddingHorizontal:'10%',
        paddingVertical:'5%',
    },

    title: {
        color:'#FCFBFE',
        fontSize:16,
        marginBottom:'2%',
    },

    campoText: {
        padding:'4%',
    },

    text:{
        color:'#FCFBFE',
        fontSize:14,
    }
    
});