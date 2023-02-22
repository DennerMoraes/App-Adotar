import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailsScreen = ({route}) => {

  const id = route.params?.item.id

  function hehe(){
    if (id==1){
      return require('../assets/dog1.png')
    }
    if (id==2){
      return require('../assets/gato1.png')
    }
    if (id==3){
      return require('../assets/coelho1.png')
    }
    if (id==4){
      return require('../assets/pato.png')
    }
  }

  return (    
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.txtnome}>{route.params?.item.name}</Text>
        <Image style={styles.imagemanimal} source={hehe()}/>
        <View style={styles.container2}>
          <Text style={styles.txtitem1}>{route.params?.item.texto}</Text>
          <Text style={styles.txttitulo}>INFORMAÇÕES:</Text>
          <Text style={styles.txtitem}>Id: {route.params?.item.id}</Text>
          <Text style={styles.txtitem}>Idade: {route.params?.item.age} Anos</Text>
          <Text style={styles.txtitem}>Espécie: {route.params?.item.especie}</Text>
          <Text style={styles.txtitem}>Telefone: {route.params?.item.telefone}</Text>
          <Text style={styles.txtitem}>Email: {route.params?.item.email}</Text>
        </View>
    </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fbe8ff',
    justifyContent:'center',
    alignItems:'center'
  },

  

  imagemanimal:{
    width:300,
    height:300,
    borderRadius:10,
  },

  txtnome:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:10,
    paddingLeft:20,
    textAlign:'center'
  },

  container2:{
    backgroundColor:'#fff',
    marginTop:20,
    borderRadius:10,

  },

  txttitulo:{
    fontSize:20,
    color:'#cb3be6',
    fontWeight:'bold',
    padding:10,
  },

  txtitem:{
    padding:10,
    fontSize:18,
    borderBottomColor:'#a3a3a3',
    borderBottomWidth: 1,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },

  txtitem1:{
    padding:10,
    fontSize:18,

  },

})

export default DetailsScreen;