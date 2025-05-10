import { useState, useContext } from "react";
import { NumberContext } from "../context/numberContext"
import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { Link } from "expo-router";


export const NumberInput = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const {number, setNumber} = useContext(NumberContext)

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
    
    const clearInput = () => {
        setNumber("");
        setErrorMessage("");
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

                    <View style={styles.pressable}>
                        <Pressable onPress={clearInput}>
                        <Text>Reset</Text>
                        </Pressable>
                    </View>
                
                    <View style={styles.pressable}>
                        <Link href="/game-screen">
                            Confirm
                        </Link>
                    </View>
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
})