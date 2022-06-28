import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function Login() {

    const navigation = useNavigation();

    //Criando os states
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    //Fazer Tela Cadastro
    function goCadastro()
    {
        navigation.navigate('Cadastro')
    }


    //Fazer Login
    function goLogin()
    {
        Alert.alert("Login efetuado com sucesso!");
        navigation.navigate('Feed')
    }

    function goLoginUsuario()
    {
        
        navigation.navigate('LoginUsuario')
    }

    function goLoginEmpresa()
    {
        
        navigation.navigate('LoginEmpresa')
    }

    //Função que efetua o login
  async function loginUser(){
   
      
    console.log("clicou");
                       
    let response = await api.post('login.php', {
                    email: email,
                    senha: senha
                })
                .then(function (response) {
                   
                    //Verificando o valor da variavel mensagem enviada pelo php
                    if(response.data == 'Logado com Sucesso!'){
                        Alert.alert("Login realizado com sucesso!");
                        navigation.navigate('Feed')
                     }
 
                     else if(response.data == 'Erro ao logar')
                       Alert.alert("E-mail ou senha incorreto, tente novamente");
                      
                    console.log(response);
                   
                })
                .catch(function (error) {
                    Alert.alert("Erro ao cadastrar, tente mais tarde!");    
                    console.log(error);
                });
  
     
   }
 


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>ESCOLHA UM TIPO DE CONTA</Text>             
            

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginEmpresa')}>
                    <Text style={styles.textButton}>CONTA BUSINESS</Text>
                </TouchableOpacity>
                   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginUsuario')}>
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