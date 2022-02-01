import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image } from 'react-native';

export default function App() {
  const TextPress = () => console.log('Text Pressed');
  const ButtonPress2 = () => Alert.prompt("write", "что угодно", text2 => console.log(text2));
  const ButtonPress = () => Alert.alert("error", "404", [
    { text: "ОК", onPress: () => console.log('Yes button') },
    { text: "ОТМЕНА", onPress: () => console.log('No button') }
  ]);
  
  // ghgfhfgh
  return (
    <SafeAreaView style={styles.container}>

      <Text numberOfLines={2} style={styles.text} >Hi {'\n'}hi </Text>
      <Button title={'нажми меня'} color={'red'} onPress={ButtonPress} />
      <Image source={{
        width: 200,
        height: 150,
        uri: "https://static5.depositphotos.com/1007168/472/i/950/depositphotos_4725473-stock-photo-hot-summer-sun-wearing-shades.jpg"
      }}/>
      <Button title={'впиши что-то'} color={'red'} onPress={ButtonPress2} />
      {/* комментарии  */}
      {/*<Image source={require('./assets/adaptive-icon.png')} />*/}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
});
