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
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e3ae0e",
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginVertical: 4,
    }
});