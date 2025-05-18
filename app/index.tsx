import { Text, View, ImageBackground, StyleSheet, } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

// import components
import { NumberInput } from "../components/numberInput";

export default function Index() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient style={styles.container} colors={["#3b021f", "#ddb52f"]}>
        <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover" style={styles.container} imageStyle={styles.backgroundImage}>
          <View style={styles.guessLabelContainer}>
            <Text style={styles.guessNumberText}>Guess My Number</Text>
          </View>
          <NumberInput></NumberInput>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  guessLabelContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  guessNumberText: {
    color: '#fff',
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 12,
  },

  backgroundImage: {
    opacity: 0.15,
  },

});
