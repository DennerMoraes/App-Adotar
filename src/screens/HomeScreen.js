import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from'./data.json';
import Icons from '../components/Icons';

const HomeScreen = ({ navigation }) => {

  const [searchWord, setSearchWord] = useState('')

  return (
    
    <View style={styles.container}>
      <SafeAreaView>

        <Text style={styles.loginLogo}>
            HOME
          </Text>
          <Text style={styles.loginLogo2}>
            Escolha uma categoria para visualizar
          </Text>
        <TextInput
          style={styles.pesquisar}
          placeholder='Pesquise um animal...'
          onChangeText={setSearchWord}
        />
        
        <ScrollView style={styles.lista}>
        <Text style={styles.txtResultados}>Resutados da busca:</Text>
          {data.filter((val) => {
            if (searchWord == ""){
              return val
            }
            else if (val.especie.toLowerCase().includes(searchWord.toLowerCase())){
              return val
            }
          }).map((item, index) => (
            <TouchableOpacity
            onPress={() => {navigation.navigate('Details',{item},{Icons}) }}
            >
              <View style={styles.itemLista}>
                  <Image source={Icons[item.image]} style={styles.imagemLista}/>
                  <View style={styles.itemListaTxt}>
                    <Text style={styles.txtEspecie} key={index}>{item.especie}</Text>
                    <Text style={styles.txtResto} key={index}>{item.name}</Text>
                    <Text style={styles.txtResto}key={index}>{item.age} Anos</Text>
                  </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },

  loginLogo:{
    marginBottom:0,
    marginTop:20,
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:20
  },

  loginLogo2:{
    marginBottom:25,
    marginTop:0,
    fontSize:20,
    paddingLeft:20
  },

  pesquisar:{
    backgroundColor:'#ffc31e',
    height:40,
    paddingLeft:20,
    borderRadius:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
  },

  lista:{
    backgroundColor:'#fbe8ff',
    width:400,
  },

  itemLista:{
    backgroundColor:'#fff',
    margin:10,
    height:90,
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
    flexDirection:'row',
    flexWrap:'wrap',
  },

  imagemLista:{
    width:90,
    height:90,
    borderColor:'#454545',
    borderRadius:5,
    backgroundColor:'red'
  },

  itemListaTxt:{
    paddingLeft:20,
    paddingTop:8,
  },

  txtEspecie:{
    fontSize:18,
    fontWeight:'bold',
    paddingBottom:5
  },

  txtResto:{
    fontSize:16,
  },

  txtResultados:{
    color:'#cb3be6',
    fontWeight:'bold',
    padding:15,
    paddingLeft:20,
    fontSize:22
  }
  
});


export default HomeScreen;