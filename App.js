import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  
  // ghgfhfgh
  return (
    <SafeAreaView style={styles.mainBlock}>
      <View style={[styles.box, {backgroundColor: 'yellow'}]}></View>
      <View style={[styles.box, {backgroundColor: 'red'}]}></View>
      <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
    </SafeAreaView>
  );
}
const simpleStyle = {backgroundColor: 'blue', color: 'red'}
const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    flexDirection: 'column', //в колонку
    //flexDirection: 'column-reverse'- колонка в обратном порядке
    //flexDirection: 'row' - поочереди 
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box:{
    height: 100,
    width: 100
  }

});
