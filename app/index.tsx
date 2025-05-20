import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

// import components
import { NumberInput } from "../components/numberInput";
import Title from '@/components/title';

// import colors
import colors from '@/constants/colors';

export default function Index() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient style={styles.container} colors={[colors.primary500, colors.secondary500]}>
        <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover" style={styles.container} imageStyle={styles.backgroundImage}>
          <SafeAreaView>
            <View style={styles.innerContainer}>
              <Title value="Guess My Number"></Title>
              <NumberInput></NumberInput>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  innerContainer: {
    marginTop: 80,
  },

  backgroundImage: {
    opacity: 0.15,
  },

});
