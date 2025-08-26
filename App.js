import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Biscoito from './Telas/Biscoito';
import Calculadora from './Telas/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculadora />
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
