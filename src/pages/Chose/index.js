//PRIMEIRA TELA APÓS ENTRAR NA CONTA

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles.js';
import Button from '../../componentes/Button/index.js';
export default function Chose({ navigation }) {
  function Generocreen() {
    navigation.navigate('Genero');
  }

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../imagens/fundo2.jpg')}
        style={styles.ImageBackground}>

        <View style={{ marginTop: 28, marginBottom: 200 }}>
          <Text style={styles.containerText}>CADASTRO</Text>
        </View>

        <View style={{ width: 250, marginBottom: 250 }}>
          <Text style={styles.containerText}>Deseja configurar seu perfil?</Text>
        </View>

        <View style={{ width: 250, }}>

          <Button style={styles.button} type="chose"
            text="CONFIGURAR">
          </Button>

          <Button style={styles.button} type="chose"
            onPress={Generocreen}
            text="MAIS TARDE">
          </Button>

        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}




