import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
  },
  containerText: {
    fontSize: 32, fontFamily: 'bold, sans-serif', textAlign: 'center', color: 'white'
  },
});