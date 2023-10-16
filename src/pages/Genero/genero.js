import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './generostyle.js';

export default function Genero() {
    const [user, setGender] = useState({ gender: 'não definido' })

    const handleGender = (e) => {
        return setGender({ ...user, gender: `${e.target.name}` });
    }

    return (
        <View style={styles.container}>

            <View style={{ marginTop: 24, marginBottom: 100, padding: 16 }}>
                <Text style={styles.containerText}>QUAL É O SEU SEXO?</Text>
            </View>

            <View style={{ width: '80%', marginBottom: 200 }}>
                <Text style={styles.containerText}>O cálculo será baseado
                    em suas características
                    principais.</Text>
            </View>
            <View>
            <button style={{ width: '100px', height: '100px', color: 'red' }} name="feminino" onClick={handleGender}>feminino</button>
            <button style={{ width: '100px', height: '100px', color: 'blue' }} name="masculino" onClick={handleGender}>masculino</button>

            
            </View><p> meu genero é {user.gender}</p>
            <View style={{ width: '80%', }}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>PROXIMO</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: '#FFFFFF' }}>
                1/3
            </Text>
        </View>

    );
}