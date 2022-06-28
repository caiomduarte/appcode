import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import MenuUser from '../pages/MenuUser';

export default function Menu() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.navigate('Menu')}>
            <Feather
            name="menu"
            size={24}
            color="#000"
            />
        </TouchableOpacity>
    );
}