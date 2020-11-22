import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

const LoginForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    
    const navigation = props.navigation;

    async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            name,
            email,
            password,
        };
        try {
            const response = await api.post('users', data);
            console.log('usuário cadastrado!');
            navigation.navigate('Login');
        } catch (err) {
            console.log(`Erro no cadastro! Tente novamente!`);
        }
    }    

    return (
        <View style={styles.container}>
            <TextInput
             style={styles.input}
             placeholder="Nome"
             onChangeText={name => setName(name)}
             defaultValue={name} />
            <TextInput
             style={styles.input}
             placeholder="Email"
             onChangeText={email => setEmail(email)}
             defaultValue={email} />
             <TextInput
             secureTextEntry={true}
             style={styles.input}
             placeholder="Senha"
             onChangeText={password => setPassword(password)}
             defaultValue={password} />
             <TouchableOpacity 
             style={styles.button}
             onPress={handleRegister}
             >
                <Text style={styles.textButton}>Cadastrar</Text>
             </TouchableOpacity>
        </View>
    )

}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        alignItems:'center',
    },
    input: {
        backgroundColor:'#fff',
        width: '85%',
        height:50,
        borderRadius: 10,
        marginBottom: 20
    },
    button: {
        alignItems:'center',
        backgroundColor:'#00D43B',
        borderRadius: 10,
        padding:14,
        width:'85%',
        marginTop: 20
    },
    textButton: {
        color:'#fff',
        textTransform:'uppercase',
        fontSize:18,
    },
    containerRegister: {
        marginTop: 30,
        flexDirection:'row'
    },
    textInfo: {
        color:'#fff',
    },
    textButtonRegister: {
        color: '#00D43B',
        marginLeft: 5
    }
});