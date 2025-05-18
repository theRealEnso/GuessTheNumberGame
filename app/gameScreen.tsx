import { useContext, useState, useEffect } from 'react';
import { NumberContext } from "../context/numberContext"
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";

// import components
import CustomButton from '@/components/customButton';
import GuessList from '@/components/guessList';
import HintModal from '@/components/hintModal';

const GameScreen = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const {number, guessedNumber, generateGuessedNumber, minBoundary, maxBoundary, setMinBoundary, setMaxBoundary, setHintMessage, setGuessCount,} = useContext(NumberContext);

  // const navigateToGameSummary = () => {
  //   router.push("/gameSummary");
  // };

  const handleLowerGuess = () => {
    const userNumber = Number(number);

    if(guessedNumber < userNumber){
      setHintMessage("guess higher!");
      setShowModal(true);
    } else { // guessedNumber is higher than userNumber... which means we need to update the upper bound and restrict it to the guessedNumber - 1 because number cannot possibly go higher
      setMaxBoundary(guessedNumber - 1);
      generateGuessedNumber(minBoundary, guessedNumber - 1);
      setGuessCount((previousCount) => previousCount + 1);
      setHintMessage("");
    };
  };

  const handleHigherGuess = () => {
    const userNumber = Number(number);

    if(guessedNumber > userNumber){
      setHintMessage("guess lower!");
      setShowModal(true)
    } else { // guessedNumber is less than userNumber... which means we need to update the lower bound and restrict it to guessedNumber + 1 because number cannot possibly go lower
      setMinBoundary(guessedNumber + 1);
      generateGuessedNumber(guessedNumber + 1, maxBoundary);
      setGuessCount((previousCount) => previousCount + 1);
      setHintMessage("");
    };
  };

  // navigate user to the game summary screen when the correct number is guessed
  useEffect(() => {
    let userNumber = Number(number);
    if(guessedNumber === userNumber){
      router.push("/gameSummary");
    }
  }, [guessedNumber, number, router])

  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/* label */}
      <LinearGradient style={styles.container} colors={["#3b021f", "#ddb52f"]}>
        <SafeAreaView>
          <View style={styles.label}>
            <Text style={styles.labelText}>Opponent&apos;s Guess</Text>
          </View>
          
          {/* number label */}
          <View style={styles.numberDisplay}>
            <Text style={styles.numberText}>{guessedNumber}</Text>
          </View>

          {/* widget container */}
          <View style={styles.widgetContainer}>
            <View>
              <Text style={styles.text}>Higher or Lower?</Text>
            </View>
            {/* button container */}
            <View style={styles.buttonContainer}>
              <CustomButton value="-" onButtonPress={handleLowerGuess}></CustomButton>
              <CustomButton value="+" onButtonPress={handleHigherGuess}></CustomButton>
            </View>
          </View>

          {/* guess list */}
          <View style={styles.guessListContainer}>
            <GuessList></GuessList>
          </View>
          

          <View style={styles.link}>
            <Link href="/">Back to main screen</Link>
          </View>

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
    marginTop: 80,
    marginBottom: 20,
    maxHeight: 50,
  },

  labelText: {
    color: '#fff',
    fontSize: 20,
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

  numberText: {
    color: "#e3ae0e",
    fontSize: 24,
  },

  widgetContainer: {
    backgroundColor: "#3b0217",
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
    flex: 2,
    width: "80%",
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
