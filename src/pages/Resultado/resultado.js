import React from 'react';
import { useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './resultadoStyles.js';

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
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>PROSSEGUIR</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#fffff', padding: 15 }}>
                    3/3
                </Text>
            </View>
        </ImageBackground>
    );
}
