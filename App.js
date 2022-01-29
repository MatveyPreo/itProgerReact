import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
  const TextPress = () => console.log('Text Pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={TextPress}>Hi {'\n'}hi </Text>
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
