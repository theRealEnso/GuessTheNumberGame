import { useState, useContext } from "react";
import { NumberContext } from "../context/numberContext"
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";

// import components
import CustomButton from "./customButton";


export const NumberInput = () => {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const {number, setNumber, reset, generateGuessedNumber} = useContext(NumberContext)

    const handleInputChange = (userInput: string): void => {
        if(/^\d*$/.test(userInput)){ // test if input is a number
          if(userInput === "" || (parseInt(userInput, 10) >= 0 && parseInt(userInput, 10) <=99)){
            setNumber(userInput);
            setErrorMessage("");
          }
        } else {
          setNumber("");
          setErrorMessage("Please enter a valid number between 0-99");
        }
    };

    // function to confirm user inputted number and start the game by navigating to the game screen
    const handleConfirm = () => {
        generateGuessedNumber();
        router.push("/game-screen");
    }

    const clearInputAndReset = () => {
        setErrorMessage("");
        reset();
    };

    return (
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.enterNumberText}>Enter a Number</Text>
                <View style={styles.numberInputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={number} 
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
                    <CustomButton value="Reset"onButtonPress={clearInputAndReset}></CustomButton>
                    <CustomButton value="Confirm" onButtonPress={handleConfirm}></CustomButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 6,
        alignItems: "center",
    },

    numberContainer: {
        backgroundColor: "black",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    
    numberInputContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        marginBottom: 10,
    },

    enterNumberText: {
        color: "#fff",
        fontSize: 22,
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: "#fff",
        color: "#fff",
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
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
    },

    errorMessageText: {
        marginTop: 10,
        color: "yellow",
      },
    
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
});