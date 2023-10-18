import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './alturaStyles.js';

export default function Altura ({navigation}) {
 
    function Resultadocreen(){
        navigation.navigate('Resultado');
      }
    return (
        <View style={styles.container}>

            <View style={{ marginTop: 4, marginBottom: 170, padding: 18}}>
                <Text style={styles.containerText}>QUAL É A SUA ALTURA?</Text>
            </View>

            <View style={{ width: '80%', marginBottom: 280 }}>
                <Text style={styles.containerText}>O cálculo será baseado
em suas características
principais.</Text>
            </View>
           
            <View style={{ width: '80%',  }}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={Resultadocreen}>PROXIMO</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#FFFFFF', padding:10 }}>
                3/3
            </Text>
        </View>

    );
}