import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username == 'user@exemplo.com.br' & password =='user1'){
        navigation.navigate('Home');
    }
  };

  return (

    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.img}
          source={require('../assets/ico.png')}
        />

        <Text style={styles.loginLogo}>
          LOGIN
        </Text>
        <Text style={styles.loginLogo2}>
          Insira seus dados para continuar
        </Text>
        <Text style={styles.inputTxt}>EMAIL</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputTxt}>SENHA</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity
        style={styles.btn}
        title="Login"
        onPress={handleLogin} 
        >
        <Text style={styles.btnTxt}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },

  loginLogo:{
    marginBottom:0,
    marginTop:20,
    fontSize:20,
    fontWeight:'bold',
  },

  loginLogo2:{
    marginBottom:45,
    marginTop:0,
    fontSize:20,
  },

  input:{
    width:300,
    padding:10,
    borderBottomColor:'#a3a3a3',
    borderBottomWidth: 2,
    marginBottom:15,
    marginTop:0,
  },

  inputTxt:{
    color:'#cb3be6',
    fontWeight:'bold',
    textAlign:'left'
  },

  img:{
    width:70,
    height:70,
  },

  btn:{
    backgroundColor:'#cb3be6',
    width:300,
    alignItems:'center',
    height:60,
    borderRadius:30,
    justifyContent:'center',
    marginTop:35
  },

  btnTxt:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
  }

});

export default LoginScreen;