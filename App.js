import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';

export default function App() {
  
  // ghgfhfgh
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
      <Text>Hello </Text>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const simpleStyle = {backgroundColor: 'blue', color: 'red'}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  box: {
    backgroundColor: 'green',
    width: '50%',
    height: '50%',
    opacity: 0.9, //прозрачность
    borderWidth: 2, // обводка
    borderColor: 'red',
    top: Platform.OS === "ios" ? 150 : 160,
    left: 150
  }
});
