import React, {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './Api/Api';
import Filmes from './Filmes/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      console.log(response.data)
      setFilmes(response.data)
    }
    loadFilmes();
  },[]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        renderItem={({item}) => <Filmes data={item}/> }
        // Convertendo ID numero para String
        keyExtractor={ item => String(item.id)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
