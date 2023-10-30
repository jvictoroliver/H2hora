
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Chose from './src/pages/Chose/chose';
import Login from './src/pages/Log-in/log';
import Register from './src/pages/Register/register';
import Genero from './src/pages/Genero/genero';
import peso from './src/pages/Peso.js/peso';
import altura from './src/pages/Altura/altura';
import resultado from './src/pages/Resultado/resultado';
const Stack = createNativeStackNavigator();

const navigationOptions = {
  
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={navigationOptions}>
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

