import React from 'react';
import { useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles.js';
import Button from '../../componentes/Button/index.js';
export default function () {

    return (
        <ImageBackground
        source={require('../../imagens/fdresult.png')}
        style={{ flex: 1, resizeMode: 'cover' }}
        >
            <View style={styles.container}>
                <View style={{ marginTop: 4, marginBottom: 170, padding: 18 }}>
                    <Text style={styles.containerText}>RESULTADO</Text>
                </View>

                <View style={{ width: '80%', marginBottom: 280 }}>
                    <Text style={styles.containerText}>Quantidade recomendável.</Text>
                </View>

                <View style={{ width: '80%' }}>
                <Button style={styles.button} type="chose"
            text="PROXIMO">
          </Button>
                </View>
                <Text style={{ color: '#ffffff', padding: 15 }}>
                    3/3
                </Text>
            </View>
        </ImageBackground>
    );
}
