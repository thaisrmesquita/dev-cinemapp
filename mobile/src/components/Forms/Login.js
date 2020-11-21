import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import api from '../../services/api';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { email,password });
            console.log('Ok');
        } catch(err) {
            console.log('Não ok');
        }
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
    }
});