import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';

const FavoriteMovie = () => {

    const [movies, setMovies] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
        
    async function getMovies() {
        
        const id = await AsyncStorage.getItem('userId'); 
        const headers = {
            user_id:id
        }
        console.log(id);
        const response = await api.get(`dashboard`, {headers});
        setMovies(response.data);
    }


    useEffect(()=> {
        getMovies();
        console.log('Aqui',movies);
    }, [movies]);

   async function handleDelete(id) {
       setIsDeleting(true);
        const user = await AsyncStorage.getItem('userId'); 
        const headers = {
            user_id:user
        }
       const response =  await api.delete(`movies/${id}`, {headers});
       console.log(response);
       setIsDeleting(false);
    }

    if(isDeleting){
        return (
            <View style={styles.containerIsDeleting}>
                <Text style={{color: '#fff'}}>Apagando...</Text>
                <ActivityIndicator size="small" color="#fff" />
            </View>
        )
    }

    if(movies.length < 1){
        return (
            <View style={styles.container}>
            <Text style={styles.textFavorite}>Favoritos</Text>
            <View style={styles.containerIsDeleting}>
                <Text style={{color: '#fff'}}>Você não possui Filmes</Text>
            </View>
            </View>
        )
    }
       

    return (
        
        <View style={styles.container}>
            <Text style={styles.textFavorite}>Favoritos</Text>
            <ScrollView>
                <View>
                    <View style={styles.containerWrapper}>
                        {movies.map(movie => { return (
                            <View style={styles.containerMovie} key={movie._id}>
                                <Text style={styles.textMovie}>{movie.title}</Text>
                                <Image source={{uri: `${movie.poster}`}}
                            style={{width: '100%', height: 400}} />
                            <TouchableOpacity style={styles.containerButtonFavorite} onPress={()=> handleDelete(movie._id)}>
                            <Text style={styles.textButtonFavorite}>Remover Filme</Text>
                            </TouchableOpacity>
                            </View>
                        )})}
                    </View>                 
                </View>
            </ScrollView>
        </View>
    )

}

export default FavoriteMovie;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
        flex:1,
        alignItems:'center',
    },
    containerIsDeleting: {
        backgroundColor: '#181818',
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
   containerWrapper: {
    width: 320
   },
   textFavorite: {
    fontSize:26,
    color: '#fff',
    margin: 20
   },
    containerMovie: {
        backgroundColor:'#fff',
        width:'100%',
        alignItems:'center',
        marginBottom:25,
    },
    textMovie: {
        color:'#181818',
        fontSize:18,
        fontWeight:'bold',
        padding:10,
        textAlign:'center'
    },
    containerButtonFavorite: {
        alignItems:'center',
        backgroundColor: '#e67e22',
        borderRadius: 5,
        margin: 10
    },
    textButtonFavorite: {
        color:'#fff',
        padding: 15,
        fontWeight:'bold'
    },
    isDeleting: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});