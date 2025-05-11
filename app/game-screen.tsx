import { useContext } from 'react';
import { NumberContext } from "../context/numberContext"
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const GameScreen = () => {
  const {number, guessedNumber} = useContext(NumberContext);

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.labelText}>Opponent&apos;s Guess</Text>
        </View>
        
        <View style={styles.numberDisplay}>
          <Text style={styles.numberText}>{guessedNumber}</Text>
        </View>

        <View style={styles.link}>
          <Link href="/">Back to main screen</Link>
        </View>
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

  label: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 50,
    marginBottom: 20,
    maxHeight: 50,
  },

  numberDisplay: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#e3ae0e",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 100,
    marginBottom: 20,
  },

  labelText: {
    color: '#fff',
    fontSize: 20,
  },

  numberText: {
    color: "#e3ae0e",
    fontSize: 24,
  },

  link: {
    flex: 6,
  },

});

export default GameScreen; // need to `export default` in order for expo-router to work
