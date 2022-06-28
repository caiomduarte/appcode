import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput} from "react-native";
//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Feed() {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.campoTop}>
                <TextInput style={styles.pesquisa} placeholder="Pesquisar"/>
                
                
            </View>

            <View style={styles.blocoPublicacao}>
                <View style={styles.campoimg}>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <View style={styles.campoInfoUser}>
                        <Text style={styles.nomeUser}>ANA CLARA</Text>
                        <Text style={styles.textInfoUser}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
                    </View>
                </View>
                <View style={styles.campoText}>
                    <Text style={styles.descricaoPublicacao}>Texto...</Text>
                </View>
                <View style={styles.campoImgPublicacao}>
                    <Image style={styles.imgPublicacao} source={require('../assets/fundo.png')}/>
                </View>
                <View style={styles.campoInteracao}>
                    <Text style={styles.textoInteracao}>Curtir</Text>
                    <Text style={styles.textoInteracao}>Comentar</Text>
                    <Text style={styles.textoInteracao}>Compartilhar</Text>
                </View>
            </View>

            <View style={styles.blocoPublicacao}>
                <View style={styles.campoimg}>
                    <Image style={styles.img} source={require('../assets/user.png')}/>
                    <View style={styles.campoInfoUser}>
                        <Text style={styles.nomeUser}>ANA CLARA</Text>
                        <Text style={styles.textInfoUser}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
                    </View>
                </View>
                <View style={styles.campoText}>
                    <Text style={styles.descricaoPublicacao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                    
                    </Text>
                </View>
                <View style={styles.campoInteracao}>
                    <Text style={styles.textoInteracao}>Curtir</Text>
                    <Text style={styles.textoInteracao}>Comentar</Text>
                    <Text style={styles.textoInteracao}>Compartilhar</Text>
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

    campoTop:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        marginBottom:25
    },

    pesquisa:{
        width:'80%',
        paddingVertical:5,
        paddingHorizontal:13,
        borderRadius:15,
        backgroundColor:'#FCFBFE',
        marginBottom:2,
    },

    campoForm: {
        width:'80%',
    },

    textForm:{
        borderBottomWidth:2,
        color:'#FCFBFE',
        fontSize:16,
        borderColor:'#68656A',
        marginBottom:'10%',
    },

    botaoArquivo:{
        borderWidth:2,
        borderRadius:15,
        borderColor:'#4B484D',
        paddingHorizontal:'2%',
        paddingVertical:'3%',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },

    textBotaoArquivo:{
        color:'#FCFBFE',
        fontSize:12,
    },

    button: {
        borderRadius:25,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        paddingHorizontal:20,
        paddingVertical: 10,
        width:'60%',
        marginLeft:'20%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:14,
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

    campoInfoUser:{
        width:'90%',
        padding:'5%',
    },

    nomeUser: {
        color:'#FCFBFE',
        fontSize:16,
    },

    textInfoUser:{
        color:'#FCFBFE',
        fontSize:12,
        paddingRight:'5%',
        textAlign:'justify',
    },

    campoText:{
        padding:'5%',
    },
    
    descricaoPublicacao:{
        color:'#FCFBFE',
        fontSize:14,
        marginTop:'2%',
        textAlign:'justify',        
    },

    campoImgPublicacao:{
        paddingHorizontal:'5%',
    },

    imgPublicacao:{
        width:'100%',
        height:150,
    },

    campoInteracao:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'10%',
    },

    textoInteracao:{
        color:'#FCFBFE',
        fontSize:12,
        marginTop:'2%',
        marginRight:'12%',
    },
    
});