import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles.js';
import Button from '../../componentes/Button/index.js';
export default function Peso({ navigation }) {
    function Alturacreen() {
        navigation.navigate('Altura');
    }

    return (
        <View style={styles.container}>

            <View style={{ marginTop: 4, marginBottom: 160, padding: 18 }}>
                <Text style={styles.containerText}>QUAL É  SEU PESO?</Text>
            </View>

            <View style={{ width: '80%', marginBottom: 200 }}>
                <Text style={styles.containerText}>O cálculo será baseado
                    em suas características
                    principais.</Text>
            </View>

            <View style={{ width: '80%', }}>

            <Button style={styles.button} type="chose"
            onPress={Alturacreen}
            text="PROXIMO">
          </Button>
            </View>
            <Text style={{ color: '#FFFFFF', padding: 10 }}>
                2 / 3
            </Text>
        </View>

    );
}