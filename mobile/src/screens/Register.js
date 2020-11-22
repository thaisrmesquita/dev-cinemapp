import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RegisterLogo from '../assets/images/register.png';
import FormRegister from '../components/Forms/Register';

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
            source={RegisterLogo}
            style={styles.image}
            resizeMode="contain"
            />
            <FormRegister navigation={navigation}/>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
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