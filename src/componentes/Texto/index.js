import React from 'react';
import { SafeAreaView, StyleSheet,Text } from 'react-native';

export default function Texto ({type,text }) {
 
 let selected="";

  switch (type) {
    case "home":
      selected = styles.home;
      break;
  }
  const txtstyle=selected;
  return (
    <Text style={[styles.input, txtstyle]}>{text}
    </Text>

  );
};
const styles = StyleSheet.create({
    
  });