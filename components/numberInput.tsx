import { useState, useContext } from "react";
import { NumberContext } from "../context/numberContext"
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

// import components
import CustomButton from "./customButton";

// import colors
import colors from "@/constants/colors";


export const NumberInput = () => {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const {number, setNumber, reset, generateGuessedNumber} = useContext(NumberContext);

    //function to validate user input and ensure that input is number between 0 and 99
    const handleInputChange = (userInput: string): void => {
        if(/^\d*$/.test(userInput)){ // test if input is a number
          if(userInput === "" || (parseInt(userInput, 10) >= 0 && parseInt(userInput, 10) <=99)){
            setNumber(userInput);
            setErrorMessage("");
          }
        } else {
          setNumber("");
          setErrorMessage("Please enter a valid number between 0-99");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }
    };

    // function to start the game by navigating to the game screen
    const handleConfirm = () => {
        let userNumber = Number(number);
        if(!userNumber){
            setErrorMessage("Cannot start game with an empty input!")
            setTimeout(() => {
                setErrorMessage("");
            }, 3000)
        } else {
            generateGuessedNumber();
            router.replace("/gameScreen");
        };
    };

    //function to clear the input and all state variables back to default values
    const clearInputAndReset = () => {
        setErrorMessage("");
        reset();
    };

    return (
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.enterNumberText}>Enter a Number</Text>

                {/* text input */}
                <View style={styles.numberInputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={number} 
                        onChangeText={handleInputChange}
                        keyboardType='number-pad' //keyboardType prop tells phone device to show specific keyboard
                        maxLength={2} // maxLength prop restricts number of characters the TextInput can accept
                        autoCapitalize="none"
                        autoCorrect={false}
                    >
                    </TextInput>
                </View>

                {/* conditionally render error message */}
                {
                    errorMessage && (
                        <Text style={styles.errorMessageText}>{errorMessage}</Text>
                    )
                }

                {/* button container */}
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
        backgroundColor: colors.primary600,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        elevation: 4, // android specific for adding box-shadow
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2}, // shift shadow downwards by 2 pixels
        shadowRadius: 6, // controls how much shadow expands
        shadowOpacity: 1 //control how transparent the shadow is
        // shadow properties are specific to target iOS devices
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
        fontFamily: "open-sans",
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: colors.secondary500,
        color: colors.secondary500,
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
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