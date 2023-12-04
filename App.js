
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Chose from './src/pages/Chose/index.js';
import Login from './src/pages/Log-in';
import Register from './src/pages/Register';
import Genero from './src/pages/Genero/index.js';
import peso from './src/pages/Peso.js';
import altura from './src/pages/Altura/index.js';
import resultado from './src/pages/Resultado';
const Stack = createNativeStackNavigator();

const navigationOptions = {
  
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={navigationOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Chose" component={Chose} />
            <Stack.Screen name="Genero" component={Genero} />
            <Stack.Screen name="Peso" component={peso} />
            <Stack.Screen name="Altura" component={altura} />
            <Stack.Screen name="Resultado" component={resultado} />
          </Stack.Navigator>
        </NavigationContainer>
        );
}

        const styles = StyleSheet.create({
          container: {
          flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
});

