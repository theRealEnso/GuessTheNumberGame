import { useContext, useState, useEffect, useRef, } from 'react';
import { NumberContext } from "../context/numberContext"
import { Text, View, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import type {ScrollView as ScrollViewInstance} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";

// import icons from expo
import Ionicons from "@expo/vector-icons/Ionicons";

// import components
import CustomButton from '@/components/customButton';
import GuessList from '@/components/guessList';
import HintModal from '@/components/hintModal';
import Title from '@/components/title';

// import colors
import colors from '@/constants/colors';

const GameScreen = () => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height >= width;

  const scrollViewRef = useRef<ScrollViewInstance>(null);

  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    number, 
    guessedNumber, 
    generateGuessedNumber, 
    guessedList,
    minBoundary, 
    maxBoundary, 
    setMinBoundary, 
    setMaxBoundary, 
    setHintMessage, 
    setGuessCount,
  } = useContext(NumberContext);

  // navigate user to the game summary screen when the correct number is guessed
  useEffect(() => {
    let userNumber = Number(number);
    if(guessedNumber === userNumber){
      router.replace("/gameSummary");
    }
  }, [guessedNumber, number, router]);

  // always scroll to bottom of scrollview to display the latest guessed number
  useEffect(() => {
    if(scrollViewRef.current){
      scrollViewRef.current.scrollToEnd({animated: true})
    }
  }, [guessedList])

  const handleLowerGuess = () => {
    const userNumber = Number(number);

    if(guessedNumber !== null && guessedNumber < userNumber){
      setHintMessage("guess higher!");
      setShowModal(true);
    } else { // guessedNumber is higher than userNumber... which means we need to update the upper bound and restrict it to the guessedNumber - 1 because number cannot possibly go higher
      if(guessedNumber !== null){
        setMaxBoundary(guessedNumber - 1);
        generateGuessedNumber(minBoundary, guessedNumber - 1);
        setHintMessage("");
      }
    };
  };

  const handleHigherGuess = () => {
    const userNumber = Number(number);

    if(guessedNumber !== null && guessedNumber > userNumber){
      setHintMessage("guess lower!");
      setShowModal(true)
    } else { // guessedNumber is less than userNumber... which means we need to update the lower bound and restrict it to guessedNumber + 1 because number cannot possibly go lower
      if(guessedNumber !== null){
        setMinBoundary(guessedNumber + 1);
        generateGuessedNumber(guessedNumber + 1, maxBoundary);
        setHintMessage("");
      }
    };
  };

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <LinearGradient style={styles.container} colors={[colors.primary500, colors.secondary500]}>
        <SafeAreaView style={[styles.container, {marginTop: isPortrait ? null : 20, maxWidth: isPortrait ? null : "50%"}]}>
          <Title value="Opponent's Guess"></Title>
          
          {/* number label */}
          <View style={[styles.numberDisplay, {maxWidth: isPortrait ? "30%" : "20%", flex: isPortrait ? 1 : 0, paddingVertical: isPortrait ? null : 15}]}>
            <Text style={styles.numberText}>{guessedNumber}</Text>
          </View>

          {/* widget container */}
          <View style={styles.widgetContainer}>
            <View>
              <Text style={styles.text}>Higher or Lower?</Text>
            </View>
            {/* button container */}
            <View style={styles.buttonContainer}>
              <CustomButton value={<Ionicons name="remove" size={24} color="#fff"></Ionicons>} onButtonPress={handleLowerGuess}></CustomButton>
              <CustomButton value={<Ionicons name="add" size={24} color="#fff"></Ionicons>} onButtonPress={handleHigherGuess}></CustomButton>
            </View>
          </View>

          {/* guess list */}
          <ScrollView ref={scrollViewRef} style={[styles.guessListContainer, {marginTop: isPortrait ? 20 : 10, flex: isPortrait ? 3 : 1}]} alwaysBounceVertical={true} bounces={true}>
            <View>
              <GuessList></GuessList>
            </View>
          </ScrollView>

          {/* conditionally render modal */}
          {
            showModal && <HintModal setShowModal={setShowModal}></HintModal>
          }
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

// define styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },

  numberDisplay: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.secondary600,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 100,
    marginBottom: 20,
  },

  numberText: {
    color: colors.secondary600,
    fontSize: 24,
  },

  widgetContainer: {
    backgroundColor: colors.primary600,
    borderRadius: 6,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    
  },

  buttonContainer: {
    flexDirection: "row",
    paddingBottom: 8,
  },

  buttonText: {
    fontSize: 16,
  },

  guessListContainer: {
    // flex: 3,
    width: "80%",
    // marginTop: 20,
  },

  text: {
    color: "#fff",
    padding: 8,
  },

  link: {
    flex: 1,
  },

});

export default GameScreen; // need to `export default` in order for expo-router to work
