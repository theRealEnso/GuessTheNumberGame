import { useContext } from 'react';
import { NumberContext } from "../context/numberContext"
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

// import components
import CustomButton from '@/components/customButton';
import GuessList from '@/components/guessList';

const GameScreen = () => {
  const {number, guessedNumber} = useContext(NumberContext);

  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/* label */}
      <View style={styles.container}>
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
            <CustomButton>
              <Text style={styles.buttonText}>-</Text>
            </CustomButton>
            <CustomButton>
              <Text style={styles.buttonText}>+</Text>
            </CustomButton>
          </View>
        </View>

        {/* guess list */}
        <GuessList></GuessList>

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
    borderWidth: 2,
    backgroundColor: "black",
    borderRadius: 6,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    
  },

  buttonContainer: {
    flexDirection: "row",
    paddingBottom: 8,
  },

  buttonText: {
    fontSize: 16,
  },

  text: {
    color: "#fff",
    padding: 8,
  },

  link: {
    flex: 6,
  },

});

export default GameScreen; // need to `export default` in order for expo-router to work
