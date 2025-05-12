import { useContext } from "react";
import { View, StyleSheet, } from "react-native";

// import context
import { NumberContext } from "@/context/numberContext";

// import components
import GuessItem from "./guessItem";

const GuessList = () => {
    const {guessedList} = useContext(NumberContext);

    return (
        <View style={styles.container}>
            {
                guessedList && guessedList.map((guessedNumber, i) => <GuessItem key={guessedNumber} number={guessedNumber} index={i}></GuessItem>)
            }
        </View>
    )
};

export default GuessList;

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginVertical: 20,
    }
})