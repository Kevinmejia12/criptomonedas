import React from 'react';
import { View,Image, Text, StyleSheet } from 'react-native';

export default function Cabecera() {
  return (
    <>
      <Text style={styles.encabezado}>Valores de Criptos</Text>
      <Image style={styles.img} source={require("../img/cryptomonedas.png")}/>
    </>
  );
}

const styles = StyleSheet.create({
    encabezado:{
        paddingVertical: Platform.OS === "ios" ? 50 : 10,
        fontFamily:"Lato-Black",
        backgroundColor:"#5E49E2",
        textAlign:"center",
        textTransform:"uppercase",
        color:"#FFF",
        fontSize:18,
        marginBottom:30
      },
      img:{
        width:"100%",
        height:150
      }
})
