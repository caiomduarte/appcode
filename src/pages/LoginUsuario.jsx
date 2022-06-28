import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function LoginUsuario() {

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


    //Função que efetua o login
  async function loginUser(){
   
      
    console.log("clicou");
                       
    let response = await api.post('login-usuario.php', {
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
                <Text style={styles.title}>ENTRAR COM UMA CONTA USUÁRIO</Text>

                <TextInput 
                    onChangeText={setEmail}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    onChangeText={setSenha}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={loginUser}>
                    <Text style={styles.textButton}>ENTRAR</Text>
                </TouchableOpacity>

                <Text style={styles.textRodape} onPress={goCadastro}>CADASTRE-SE</Text>
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
        marginTop:'30%'
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
        marginTop:50,
        marginBottom:'40%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

    textRodape: {
        marginTop:'15%',
        color:'#FCFBFE',
        fontSize:14,
        marginBottom:15
    }

})