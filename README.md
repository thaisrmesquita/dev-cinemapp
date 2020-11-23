## Descrição do Projeto :star:
Este é um projeto de aplicativo onde o usuário será capaz de buscar por filmes e series utilizando a API (http://www.omdbapi.com/).
O usuário será capaz de fazer uma busca e selecionar seus filmes favoritos, podendo listá-los e caso deseje, excluí-los da sua lista pessoal.

## O que a plataforma é capaz de fazer :checkered_flag:

:small_blue_diamond: Permitir a busca por filmes que gostamos

:small_blue_diamond: Listar os filmes encontrados

:small_blue_diamond: Permitir que escolhamos nosso filmes favoritos

:small_blue_diamond: Permitir que removamos um filme de nossos favoritos (às vezes um filme enjoa)

:small_blue_diamond: Listar nossos filmes favoritos

## Como o projeto funciona

Este projeto foi desenvolvido com React Native. Ele também possui uma API feita em NodeJs integrado com MongoDB. 
O usuário busca as informações do filme na API externa do OMDB, mas a partir do momento que ele seleciona um filme como favorito, esse filme é salvo na API do projeto, mantendo um histórico daquele usuário. 

## Pré-requisitos

[Node](https://nodejs.org/en/download/)

[Yarn](https://yarnpkg.com/)

## Como rodar a aplicação 

No terminal, clone o projeto: 

```
https://github.com/thaisrmesquita/dev-cinemapp
```

entre na pasta do projeto:

```
cd dev-cinemapp
```

Instale as dependências de cada projeto:
```
yarn
```
or 

```
npm install
```


Entre na pasta mobile pelo terminal e execute a aplicação do mobile (lembrando de fazer as alterações de portas da rede no arquivo api(dentro de services):

```
yarn start
```
```
react-native run-android
```

Em outra guia do cmd, acesse a pasta backend e execute o comando:
```
yarn dev
```

Pronto, a aplicação estará disponivel, conecte seu aparelho para visualizar a aplicação.
## Demonstração do funcionamento do aplicativo

[![Watch the video](https://img.youtube.com/vi/dbtR-sjYGMo/hqdefault.jpg)](https://youtu.be/dbtR-sjYGMo)

## Para Teste
Você pode criar um usuário para a utilização da plataforma, ou se preferir, pode usar o de teste:
Advogado:

Login: thais@email.com
senha: 123456

É isso :))


