import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/images/logo.png';
import api from '../services/api';

const Home = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [poster, setPoster] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [movies, setMovies] = useState([]);
    const userId = AsyncStorage.getItem('userId');
    const apiKey = 'dc93407a';

    useEffect(()=>{
        getMovies();
    }, [title]);

  async function getMovies() {
      try{
        const response = await api.get(`http://www.omdbapi.com/?apiKey=${apiKey}&s=${title.trim()}`);
        const movies = JSON.parse(response.request._response);
        setMovies(movies.Search);
        return movies;
      } catch (error){
          console.log(error)
      }
      
  }

    function handleSearch () {
        getMovies();
        console.log(movies);    
    }

    async function handleFavorite(movie) {
        console.log("Dentro do favorito: ", movie)
        console.log(userId._W);
        console.log(movie);
       setName(movie.Title);
       setYear(movie.Year);
       setType(movie.Type);
       setPoster(movie.Poster);
       setIsFavorite(true);

       const data = {
        user: userId._W,
        title: movie.Title,
        year:movie.Year,
        type:movie.Type,
        poster:movie.Poster,
        isFavorite: true
    };
    console.log(data);

    try {
       const response = await api.post('movies', data);
       console.log(response);
    } catch (err) {
        console.log(err);
        alert(`Erro no cadastro! Tente novamente!`);
    }

    }

    if(!movies){
        return (
            <>
            <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao CinemAPP, os melhores filmes na ponta dos seus dedos.</Text>
            <View style={styles.containerInput}>
                <TextInput
                style={styles.input}
                placeholder="Título"
                onChangeText={title => setTitle(title)}
                defaultValue={title} />
                <TouchableOpacity onPress={handleSearch} style={styles.containerIcon}>
                    <Icon
                    name="search-outline"
                    size={40}
                    color="#fff"
                    style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
            <View style={styles.containerSearch}>
                <Text style={{color: '#fff'}}>Sem buscas não há resultados :(</Text>
            </View>
            </>
        )
    }

    console.log(movies);
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao CinemAPP, os melhores filmes na ponta dos seus dedos.</Text>
            <View style={styles.containerInput}>
                <TextInput
                style={styles.input}
                placeholder="Título"
                onChangeText={title => setTitle(title)}
                defaultValue={title} />
                <TouchableOpacity onPress={handleSearch} style={styles.containerIcon}>
                    <Icon
                    name="search-outline"
                    size={40}
                    color="#fff"
                    style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView style={styles.containerScroll}>
            <View style={styles.teste}>
                    {movies !== undefined && movies.length > 0 &&
                            movies.map( (movie, index) => {
                                return (
                                <View style={styles.containerMovie} key={index}>
                                    
                                    <Text style={styles.textMovie}>{movie.Title}</Text>
                                    <Image source={{uri: `${movie.Poster}`}}
                                    style={{width: '100%', height: 400}} />
                                    <TouchableOpacity style={styles.containerButtonFavorite} onPress={() => handleFavorite(movie)}>
                                    <Text style={styles.textButtonFavorite}>Adicionar como Favorito</Text>
                                    </TouchableOpacity>

                                </View>
                            )})
                        }
            </View>
            </ScrollView>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
        alignItems:'center'
    },
    containerScroll: {
        backgroundColor: '#181818',
    },
    containerSearch: {
        backgroundColor: '#181818',
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    containerText: {
        width:'85%',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color:'#fff',
        textAlign:'center',
        margin:30
    },
    image: {
        marginTop:0,
        width:200,
        height:200,
        backgroundColor:'red',
        padding: 0
    },
    containerInput: {
        width:'85%',
        flexDirection:'row',
        justifyContent:'center'
    },
    input: {
        backgroundColor:'#fff',
        width: '85%',
        height:50,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 20
    },
    containerIcon: {
        backgroundColor:'#17C548',
        padding:3.8,
        borderBottomRightRadius:10,
        borderTopRightRadius:10
    },
    icon: {
        width:'100%',
        backgroundColor:'#17C548',
    },
    containerMovie: {
        backgroundColor:'#fff',
        width:'85%',
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
    teste: {
        flex:2, justifyContent:'center', alignItems:'center'
    }
})