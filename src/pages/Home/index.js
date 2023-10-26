import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles.js'
import Button from '../../componentes/Button';
export default function Home({ navigation }) {

  function Registercreen() {
    navigation.navigate('Register');
  }

  function LoginScreen() {
    navigation.navigate('Login');
  }

  return (
    <ImageBackground
      source={require('../../imagens/woman.webp')}
      style={styles.backgroundImage}
    >

      <View style={styles.container}>
        <View style={{ marginBottom: 190, marginTop: 80 }}>
          <Image
            source={require('../../imagens/logo.png')}
            style={{ width: 280, height: 130, borderRadius: 100, borderColor: 'white', borderWidth: 10 }}
          />
        </View>
        <View style={{ width: 220, }} >
          <Button onPress={LoginScreen} type="login"
            text="ENTRAR">
          </Button>
          <Button onPress={Registercreen} type="login"
            text="CRIAR CONTA">
          </Button>
        </View>
        <StatusBar style="auto" />
      </View>

    </ImageBackground>
  );
}