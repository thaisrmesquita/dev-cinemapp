import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import FormLogin from '../components/Forms/Login';
import Logo from '../assets/images/logo.png';

const Login = () => {
    return (
        <View style={styles.container}>
            <Image 
            source={Logo}
            style={styles.image}
            resizeMode="contain"
            />
        <FormLogin />
        </View>
    )

}
export default Login;

const styles = StyleSheet.create({
    container: {
        marginTop:0,
        flex:1,
        alignItems:'center',
        backgroundColor: '#181818'
    },
    image: {
        marginTop:0,
        width:200,
        height:200,
    }
})