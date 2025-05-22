import { useCallback } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// import components
import { NumberInput } from "../components/numberInput";
import Title from '@/components/title';

// import colors
import colors from '@/constants/colors';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  const [fontsLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient style={styles.container} colors={[colors.primary500, colors.secondary500]}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
          onLoadEnd={onLayoutRootView}
        >
          <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
            <SafeAreaView style={styles.container}>
                <View style={[styles.innerContainer, { marginTop: isPortrait ? 100 : 50 }]}>
                  <Title value="Guess My Number" />
                  <NumberInput />
                </View>
              </SafeAreaView>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
    width: "100%",
  },

  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
