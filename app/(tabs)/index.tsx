import { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet, } from 'react-native';
import { StatusBar } from "expo-status-bar";
 import { Link } from 'expo-router'; 

export default function Index() {
  const [numberInput, setNumberInput] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleInputChange = (userInput: string): void => {
    if(/^\d*$/.test(userInput)){ // test if input is a number
      if(userInput === "" || (parseInt(userInput, 10) >= 0 && parseInt(userInput, 10) <=99)){
        setNumberInput(userInput);
        setErrorMessage("");
      }
    } else {
      setNumberInput("");
      setErrorMessage("Please enter a valid number between 0-99");
    }
  };

  const clearInput = () => {
    setNumberInput("");
  }

  // console.log(numberInput);
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.container}>
        <View style={styles.guessLabelContainer}>
          <Text style={styles.guessNumberText}>Guess My Number</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.enterNumberText}>Enter a Number</Text>
          <View style={styles.numberInputContainer}>
            <TextInput 
              style={styles.textInput} 
              value={numberInput} 
              onChangeText={handleInputChange}
              keyboardType='numeric'
              maxLength={2}
            >
            </TextInput>
          </View>

          {
            errorMessage && (
              <Text style={styles.errorMessageText}>{errorMessage}</Text>
            )
          }

          <View style={styles.buttonContainer}>
            <View style={styles.pressable}>
              <Pressable onPress={clearInput}>
                <Text>Reset</Text>
              </Pressable>
            </View>
            
            <View style={styles.pressable}>
              <Pressable>
                <Text>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </View>
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
  },

  guessLabelContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  numberContainer: {
    flex: 6,
    alignItems: "center",
  },

  numberInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },

  guessNumberText: {
    color: '#fff',
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 12,
  },

  errorMessageText: {
    marginTop: 10,
    color: "yellow",
  },

  enterNumberText: {
    color: "#fff",
  },

  textInput: {
    borderBottomWidth: 2,
    borderColor: "#fff",
    color: "#fff",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pressable: {
    marginTop: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#fcba03",
    backgroundColor: "#fcba03",
    padding: 6,
    width: "30%",
    alignItems: "center",
    justifyContent: "center"

  }
});
