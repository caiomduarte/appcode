import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import Inicio from "./pages/Inicio";
import MenuLogin from "./pages/MenuLogin";
import Login from "./pages/Login";
import MenuUser from "./pages/MenuUser";
import Detail from "./pages/Tarefas";
import Perfil from "./pages/Perfil";
import Projetos from "./pages/Projetos";
import Feed from "./pages/Feed";
import Menu from "./components/Menu";
import MyProject from "./pages/MyProject";
import Cadastro from "./pages/Cadastro";
import DescricaoPF from "./pages/DescricaoPF";
import DescricaoPJ from "./pages/DescricaoPJ";
import PerfilBusiness from "./pages/PerfilBusiness";
import Tarefas from "./pages/Tarefas";
import Equipe from "./pages/Equipe";
import Curso from "./pages/Cursos";
import LoginUsuario from "./pages/LoginUsuario";
import LoginEmpresa from "./pages/LoginEmpresa";


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Business Code" component={Inicio} />
                <Stack.Screen name="Cadastro | Login" component={MenuLogin} />
                <Stack.Screen name="Menu" component={MenuUser} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Descrição de perfil" component={DescricaoPF} />
                <Stack.Screen name="Conta Business" component={DescricaoPJ} />
                <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
                <Stack.Screen name="LoginEmpresa" component={LoginEmpresa} />
                <Stack.Screen 
                name="Tarefas" 
                component={Tarefas} 
                options={{
                    title: 'TAREFAS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Equipe" 
                component={Equipe} 
                options={{
                    title: 'EQUIPE',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />
                
                <Stack.Screen 
                name="PerfilBusiness" 
                component={PerfilBusiness} 
                options={{
                    title: 'MEU PERFIL',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />
                
                <Stack.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    title: 'MEU PERFIL',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Meus Projetos" 
                component={MyProject} 
                options={{
                    title: 'MEUS PROJETOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Curso" 
                component={MyProject} 
                options={{
                    title: 'CURSOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />

                <Stack.Screen 
                name="Projetos" 
                component={Projetos} 
                options={{
                    title: 'PROJETOS',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />
                
                <Stack.Screen 
                name="Feed" 
                component={Feed} 
                options={{
                    title: 'FEED',

                    headerRight: () => (
                        <View style={{flexDirection:'row'}}>
                            <Menu/>
                        </View>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;