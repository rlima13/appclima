import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Tempo(props) {
 return (
   <>
        <Text style={styles.titulo}>Dados do Tempo para hoje</Text>
        <Text style={styles.texto}>Máx: {props.previsao.max}</Text>
        <Text style={styles.texto}>Mín: {props.previsao.min}</Text>
        <Text style={styles.texto}>Descrição: {props.previsao.description}</Text>

   </>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize:25
    },
    texto:{
        fontSize:20
    }
})