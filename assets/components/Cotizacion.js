import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const Cotizacion = ({cotizar}) =>{
    if(Object.keys(cotizar).length===0) return null
    return(
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{cotizar.PRICE}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas alto del dia: {" "}
                <Text style={styles.span}>{cotizar.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}> Precio mas bajo del dia: {" "}
                <Text style={styles.span}>{cotizar.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}> Variacion ultimas 24 horas: {""}
                <Text style={styles.span}>{cotizar.CHANGEPCT24HOUR}</Text>
            </Text>
            <Text style={styles.texto}> Actualizacion: {""}
                <Text style={styles.span}>{cotizar.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado:{
        fontFamily:"Lato-Regular",
        backgroundColor:"#5E49E2",
        marginTop:30,
        paddingVertical:10,
        borderRadius:5,
        paddingHorizontal:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    },
    texto:{
        fontSize:18,
        color:"#FFF",
        marginBottom:5
    },
    precio:{
        fontSize:38
    },
    span:{
        fontWeight:"bold"
    }
})

export default Cotizacion