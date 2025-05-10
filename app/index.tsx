import { Text, View, StyleSheet, } from 'react-native';
import { StatusBar } from "expo-status-bar";

// import components
import { NumberInput } from "../components/numberInput";

export default function Index() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.container}>
        <View style={styles.guessLabelContainer}>
          <Text style={styles.guessNumberText}>Guess My Number</Text>
        </View>
        <NumberInput></NumberInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  guessLabelContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red"
  },

  guessNumberText: {
    color: '#fff',
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 12,
  },

});
