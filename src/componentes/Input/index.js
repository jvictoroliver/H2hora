import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default function Inputs({ placeholder, type }) {
 
 let selected="";

  switch (type) {
    case "maior":
      selected = styles.maior;
      break;
    default:
      selected = styles.register;
      break;
  }
  const txtstyle=selected;
  return (
    <TextInput style={[styles.input, txtstyle]} placeholder={placeholder}>
    </TextInput>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 10,
    margin: 18,
    borderWidth: 1,
    padding: 28,
    backgroundColor: "#1e2f44",
    borderRadius: 8,
    margin: 12,
    justifyContent: "center",
    textAlign: "center",
    color: "#d1cbc0"
  },
 maior:{
  padding: 28,
  width: 300,
 }
});

