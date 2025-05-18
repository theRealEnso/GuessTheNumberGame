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
        if(!number){
            setErrorMessage("Cannot start game with an empty input!")
            setTimeout(() => {
                setErrorMessage("");
            }, 3000)
        } else {
            generateGuessedNumber();
            router.push("/gameScreen");
        };
    };

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
        backgroundColor: "#3b0217",
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
    },

    textInput: {
        borderBottomWidth: 2,
        borderColor: "#ddb52f",
        color: "#ddb52f",
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