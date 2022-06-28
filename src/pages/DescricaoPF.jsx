import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

//Instalar pelo comando expo install react-native-gesture-handler
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//Importante o arquivo API
import api from '../services/api';

export default function DescricaoPF() {

    const navigation = useNavigation();

    //Criando as variaveis para receber o dados da tela
    let [nascimento, setNascimento] = useState('');
    let [cpf, setCpf] = useState();
    let [formacao, setFormacao] = useState();
    let [experiencia, setExperiencia] = useState();
    let [competencia, setCompetencia] = useState();

      //Criando as variaveis para receber o dados da tela
  let [nome, setNome] = useState();
  let [email, setEmail] = useState();
 // let [contato, setContato] = useState();
  let [senha, setSenha] = useState();
  let [confirmarpws, setPws] = useState();

    //Criando a função para cadastrar um usuario no banco de dados
 async function CadastrarUsuarioPF(){      

                       
    let response = await api.post('cadastro-pf.php', {
                    nome:nome,
                    senha:senha,
                    email:email,
                    nascimento: nascimento,
                    cpf:cpf,
                    formacao: formacao,
                    experiencia: experiencia,
                    competencia: competencia,
                })
                .then(function (response) {
                    Alert.alert("Usuário Cadastrado com sucesso!");              
                    navigation.navigate('Feed');
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
                <Text style={styles.title}>DESCRIÇÃO DE PERFIL</Text>


                <TextInput 
                    onChangeText={setNome}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Nome"
                />

                <TextInput 
                    onChangeText={setEmail}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="E-mail"
                    keyboardType="email-address"
                />

            <TextInput 
                    onChangeText={setSenha}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                
                <TextInput 
                    onChangeText={setPws}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                />


                <TextInput 
                    onChangeText={setNascimento}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Data de Nascimento" 
                />

                <TextInput 
                    onChangeText={setCpf}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="CPF" 
                    keyboardType='numeric'
                />

                <TextInput 
                    onChangeText={setFormacao}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Formação Acadêmica" 
                    numberOfLines={4} multiline 
                />

                <TextInput 
                    onChangeText={setExperiencia}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Experiências Profissionais" 
                    numberOfLines={4} multiline
                />

                <TextInput 
                    onChangeText={setCompetencia}
                    autoCorrect={false}  
                    style={styles.campoForm} 
                    placeholder="Competências" 
                    numberOfLines={4} multiline
                />

                <TouchableOpacity style={styles.button} onPress={CadastrarUsuarioPF}>
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
        marginTop:'5%'
    },

    campoForm: {
        borderColor:'#68656A',
        width:'80%',
        borderBottomWidth:2,
        color:'#FCFBFE',
        fontSize:16,
        marginBottom:'5%',
    },

    button: {
        borderRadius:15,
        backgroundColor:'#6E5581',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical: 15,
        marginTop:50,
        marginBottom:'15%',
    },

    textButton: {
        color:'#FCFBFE',
        fontSize:16,
        
    },


})