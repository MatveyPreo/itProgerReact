import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import Form from './components/Form'
export default function App() {
  const [listOfItems, setlistOfItems] = useState([
    {text: 'купить молоко', key: '1'},
    {text: 'помыть машину', key: '2'},
    {text: 'купить картошку', key: '3'},
    {text: 'убратть в комнате', key: '4'}
  ])
  const addHandler = (text) =>{
    setlistOfItems((list) => {
      return[
        { text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }
  const deleteHandler = (key) => {
    setlistOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  }
  return (
    <View >
      <Header/>
      <Form addHandler={addHandler} />
      <View>
        <FlatList data ={listOfItems} renderItem={({ item}) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

