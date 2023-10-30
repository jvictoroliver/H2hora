//TELA DE CADASTRO

import { StatusBar } from 'expo-status-bar';;
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './registerStyles';
import Button from '../../componentes/Button/index.js';
import Input from '../../componentes/Input/index.js';

export default function Sign({ navigation }) {

  function LoginScreen() {
    navigation.navigate('Login');
  }
  function ChoseScreen() {
    navigation.navigate('Chose');
  }

  function homeScreen() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 80, marginTop: 60, flexDirection: 'row',  }}>

        <TouchableOpacity onPress={homeScreen}>
        <Image
          source={require('../../imagens/voltar.png')}
          style={{ width: 35, height: 35, borderRadius: 100, marginLeft: 10 }}/>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', width: '100%', paddingRight: 100 }}>
          <Text style={{ color: "#ffffff", fontSize: 32 }}>CADASTRAR</Text>
        </View>

      </View>

      <View style={{padding:30, marginBottom:24}}>
      <Input placeholder={"NOME"} type="maior"/>
      <Input placeholder={"EMAIL"} type="maior"/>
      <Input placeholder={"SENHA"} type="maior"/>
      <Input placeholder={"CONFIRMAR SENHA"} type="maior"/>
      </View>
      <View style={{ marginTop: 40 ,width:200 }}>
        <Button onPress={ChoseScreen} type="register"
          text="CRIAR CONTA">
        </Button>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Já Possui uma conta?</Text>
        <TouchableOpacity on onPress={LoginScreen}>
          <Text style={{ color: '#ffffff', fontSize: 20, textDecorationLine: 'underline' }}> Fazer login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
