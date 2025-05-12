import { View, Text, StyleSheet } from "react-native";

type NumberProps = {
    number: number;
    index: number;
};

const GuessItem = ({number, index}: NumberProps) => {
    return (
        <View style={styles.container}>
            <Text>{`#${index + 1}`}</Text>
            <Text>{`Opponent's Guess: ${number}`}</Text>
        </View>
    )
};

export default GuessItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#e3ae0e",
        borderRadius: 16,
        padding: 4,
    }
});