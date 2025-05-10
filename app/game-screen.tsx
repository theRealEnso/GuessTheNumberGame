import { useContext } from 'react';
import { NumberContext } from "../context/numberContext"
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const GameScreen = () => {
  const {number} = useContext(NumberContext);

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.container}>
        <Text style={styles.text}>Game Screen</Text>
        <Text>{number}</Text>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default GameScreen; // need to `export default` in order for expo-router to work
