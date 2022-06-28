import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function DescricaoPJ() {

    const navigation = useNavigation();

    //Criando as variaveis para receber o dados da tela
    let [empresa, setEmpresa] = useState();
    let [cnpj, setCnpj] = useState();
    let [descricao, setDescricao] = useState();
  
    let [email, setEmail] = useState();
   // let [contato, setContato] = useState();
    let [senha, setSenha] = useState();
   let [confirmarpws, setPws] = useState();

    //Criando a função para cadastrar um usuario no banco de dados
 async function CadastrarUsuarioPJ(){      

                       
    let response = await api.post('cadastro-empresa.php', {
                  
                    email:email,
                    senha:senha,
                    empresa:  empresa,
                    cnpj: cnpj,
                    descricao: descricao
                })
                .then(function (response) {
                    Alert.alert("Empresa Cadastrada com sucesso!");              
                    navigation.navigate('PerfilBusiness')
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
                <Text style={styles.title}>CONTA BUSINESS</Text>
                
              

                 <TextInput 
                    onChangeText={value => setEmail}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="E-mail"
                    keyboardType="email-address"
                />

            <TextInput 
                    onChangeText={value => setSenha}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                
                <TextInput 
                    onChangeText={value => setPws}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                />

                
                
                <TextInput 
                    onChangeText={value => setEmpresa}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Empresa" 
                />

                <TextInput 
                    onChangeText={value => setCnpj}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="CNPJ" 
                />

                <TextInput 
                    onChangeText={value => setDescricao}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Descrição" 
                    numberOfLines={4} multiline
                />

                <TouchableOpacity style={styles.button} onPress={CadastrarUsuarioPJ}>
                    <Text style={styles.textButton}>CADASTRE-SE</Text>
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
        textAlign:'left',
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
        color:'#FFF',
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
        marginBottom:'30%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
    },

})