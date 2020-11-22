import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import FormLogin from '../components/Forms/Login';
import Logo from '../assets/images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
    function teste () {
        console.log('cliquei');
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image 
            source={Logo}
            style={styles.image}
            resizeMode="contain"
            />
        <FormLogin navigation={navigation} />

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