import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './generostyle.js';
import Button from '../../componentes/Button/index.js';
export default function Genero({navigation}) {
    const [user, setGender] = useState({ gender: 'não definido' })

    const handleGender = (e) => {
        return setGender({ ...user, gender: `${e.target.name}` });
    }
    function Pesocreen(){
        navigation.navigate('Peso');
      }
    return (
        <View style={styles.container}>

            <View style={{ marginTop: 24, marginBottom: 110, padding: 16 }}>
                <Text style={styles.containerText}>QUAL É O SEU SEXO?</Text>
            </View>

            <View style={{ width: '90%', marginBottom: 200 }}>
                <Text style={styles.containerText}>O cálculo será baseado
                    em suas características
                    principais.</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', }}>
                
                <button
                
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '60%',
                        overflow:"hidden",
                        marginRight: '18px',
                        backgroundColor:'blue',
                    }}
                    name="masculino"
                    onClick={handleGender}
                >
                      
                </button>
                <button
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '60%',
                        marginRight:'18px',
                        backgroundColor:"red",
                    }}
                    name="feminino"
                    onClick={handleGender}
                >

                </button>
            </View>

            <p> meu genero é {user.gender}</p>
            <View style={{ width: '80%', }}>

            <Button style={styles.button} type="chose"
            onPress={Pesocreen}
            text="PROXIMO">
          </Button>
            </View>
            <Text style={{ color: '#FFFFFF' }}>
                1/3
            </Text>
        </View>

    );
}