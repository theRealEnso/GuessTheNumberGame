import { useCallback } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// import components
import { NumberInput } from "../components/numberInput";
import Title from '@/components/title';

// import colors
import colors from '@/constants/colors';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Index() {

  const [fontsLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  // Keep the splash screen visible until fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // splash screen will stay visible
  };

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <LinearGradient style={styles.container} colors={[colors.primary500, colors.secondary500]}>
        <ImageBackground 
          source={require("../assets/images/background.png")} 
          resizeMode="cover" style={styles.container} 
          imageStyle={styles.backgroundImage}
          onLoadEnd={onLayoutRootView}
        >
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
