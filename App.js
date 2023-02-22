import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{title:'',headerTransparent: true,headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{title:'',headerTransparent: true,headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{title:'',headerTransparent: true,headerShown:false}} name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;