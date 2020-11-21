import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import background from '../assets/images/background.png';

const SplashScreen = () => {

    return (
        <View>
            <Animatable.Image
                style={styles.imageContainer}
                animation="fadeIn"
                duration={500}
                delay={250}
                source={background}
        />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height:'100%'
    }
});