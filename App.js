import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';
export default function App() {
  
  const [dados,setDados] = useState ("");
  const [cidade,setCidade] = useState ("");

  async function carregaTempo(){
    
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,description&key=bf21a4ec&city_name=${cidade},SP`);
    setDados(response.data.forecast[0]);
  }

  return (
    <View style={styles.container}>
        <View style={styles.bloco}>
          <Text style={styles.titulo}>Previsão do Tempo</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.label}>Cidade: </Text>
          <TextInput 
            placeholder='digite aqui a cidade ...'
            style={styles.input}
            value = {cidade}
            onChangeText={(value) => setCidade(value)}
          />
        </View>
        <View style={styles.bloco}>
            <TouchableOpacity style={styles.botao} onPress={carregaTempo}>
                <Text style={styles.textoBotao}>Buscar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bloco}>
            <Tempo previsao={dados}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  bloco:{
    marginTop:30,
    width:'80%',
    marginLeft:'10%',
    
  },
  label:{
    fontSize:20
  },
  titulo:{
    fontSize:30,
    textAlign:'center'
  },
  input:{
    borderBottomWidth:2,
    fontSize:20
  },
  botao:{
    backgroundColor:"black",
  },
  textoBotao:{
    fontSize:20,
    color:"#FFF",
    textAlign:'center'
  }
});

//https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,description&key=4daebe67&city_name=Peruibe,SP