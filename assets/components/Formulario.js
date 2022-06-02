import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
const Formulario = ({
  moneda,
  setMoneda,
  criptoMoneda,
  guardarCriptomoneda,
  guardarConsultarAPI
}) => {
  
  const [criptoMonedas,RCriptoMonedas] = useState([]);

  useEffect(()=>{
    const consultarAPI = async ()=>{
      const url =  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const resultado = await axios.get(url)
      RCriptoMonedas(resultado.data.Data);
    }
    consultarAPI(); //ejecutamos la funcion
  }, []);

  const AlmacenarCriptomoneda = cripto => {
    guardarCriptomoneda(cripto)
  }

  const obtenerMoneda = moneda => {
    setMoneda(moneda)
  }
  
  const Validar = () => {
    if([moneda,criptoMoneda].includes("")){
      Alert.alert(
        "Error",
        "Para convertir seleccione su moneda nativa y su criptomoneda",
        [{text:"Ok" }]
      )
      return
    }
    guardarConsultarAPI(true)
    
  }

  return (
    <View>
      <Text style={styles.txtSelectores}>Moneda nativa</Text>

      <Picker 
      selectedValue={moneda}
      onValueChange={ moneda => obtenerMoneda(moneda)}
      >
        <Picker.Item label='-Seleccione su moneda-' value="" />
        <Picker.Item label='MXN' value="MXN" />
        <Picker.Item label='USD' value="USD" />
        <Picker.Item label='EUR' value="EUR" />
        <Picker.Item label='Libra Esterlina' value="GBP" />
      </Picker>

      <Text style={styles.txtSelectores}>Criptomoneda</Text>

      <Picker 
      selectedValue={criptoMoneda}
      onValueChange={ cripto => AlmacenarCriptomoneda(cripto)}
      >
        <Picker.Item label='-Seleccione la criptomoneda-' value="" />
        {criptoMonedas.map(cripto => (
        <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
        ))}
      </Picker>

      <View style={styles.containerBtn}>
        <Pressable style={styles.Btn} onPress={Validar}>
          <Text style={styles.txtBtn}>Convertir</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles= StyleSheet.create({
    txtSelectores:{
        fontFamily:"Lato-Black",
        fontSize:22,
        textTransform:"uppercase",
        marginVertical:20,
        color:"#000"
    },
    containerBtn:{
      alignItems:"center",
      backgroundColor:"#5E49E2",
      marginHorizontal:110,
      paddingVertical:8,
      borderRadius:10,
      marginTop:20,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
    },
    Btn:{
      width:"100%",
      alignItems:"center",
      height:20
    },
    txtBtn:{
      color:"#FFF"
    }
})

export default Formulario