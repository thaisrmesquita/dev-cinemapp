import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    
    const navigation = props.navigation;
    
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { email,password });
            await AsyncStorage.setItem('userId', response.data._id);
            await AsyncStorage.setItem('userName', response.data.name);
            await AsyncStorage.setItem('userEmail', response.data.email);
            console.log('ok');
            navigation.navigate('Home');
        } catch(err) {
            console.log('Não ok');
        }
    }

    function handleGoRegister () {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
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
             onPress={handleLogin}
             >
                <Text style={styles.textButton}>Entrar</Text>
             </TouchableOpacity>
             <View style={styles.containerRegister}>
             <Text style={styles.textInfo}>Não tem conta?</Text>
             <TouchableOpacity 
             style={styles.buttonRegister}
             onPress={handleGoRegister}
             >
                 <Text style={styles.textButtonRegister}>Cadastre-se aqui!</Text>
             </TouchableOpacity>
             </View>
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