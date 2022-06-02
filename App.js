import React, {useState, useEffect}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Cabecera from './assets/components/Cabecera';
import Formulario from './assets/components/Formulario';
import axios from 'axios';
import Cotizacion from './assets/components/Cotizacion';

const App = () =>{
  //states para el formualrio 
  const [moneda,setMoneda] = useState("");
  const [criptoMoneda ,guardarCriptomoneda] = useState("");
  const [consultarAPI, guardarConsultarAPI] = useState(false)
  //states para cotizar 
  const [cotizar, setCotizar] = useState({})
  const[cargando,SetCargando] = useState(false)

  useEffect(()=>{
    const cotizarCripto = async () => {
      if(consultarAPI){ // revisamos que sea true
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url)
        SetCargando(true)
        setTimeout(() => {
          setCotizar(resultado.data.DISPLAY [criptoMoneda] [moneda]) //jalamos el resultado y lo vemos como si fuera un objeto(mediante puntos )
          guardarConsultarAPI(false) //regresamos al false
          SetCargando(false)
        }, 2000);
      }
    }
    cotizarCripto() //ejecutamos la arrow function
  },[consultarAPI])

  const Cargando = cargando ? <ActivityIndicator style={styles.cargando} size="large" color={"#000"} /> : <Cotizacion cotizar={cotizar}/>

  return(
    <>s
    <ScrollView>
      <Cabecera/>
      <View style={styles.container}>
        <Formulario moneda={moneda} 
        setMoneda={setMoneda} 
        criptoMoneda={criptoMoneda} 
        guardarCriptomoneda={guardarCriptomoneda} 
        guardarConsultarAPI={guardarConsultarAPI}
        />
        {Cargando}
      </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:"2.5%"
  },
  cargando:{
    fontSize:20,
    marginTop:50
  }
});

export default App;
