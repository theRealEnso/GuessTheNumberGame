import { useContext } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

// import context
import { NumberContext } from "@/context/numberContext";

const GameSummary = () => {
    const router = useRouter();

    const { reset } = useContext(NumberContext);

    // function to reset game
    const resetGame = () => {
        reset()
        router.push("/");
    };

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.gameOverText}>GAME OVER!</Text>
            </View>

            {/* image */}
            <View style={styles.imageContainer}>

            </View>

            {/* game details */}
            <View style={styles.gameDetails}>
                <Text></Text>
                <Pressable onPress={resetGame}>
                    <Text>Start new game</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default GameSummary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    labelContainer: {
        flex: 1,
        color: "#fff",
        borderWidth: 2,
        paddingHorizontal: 16,
        marginVertical: 100,
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 50,
    },

    imageContainer: {
        flex: 4,
        borderWidth: 2,
        borderRadius: 100,
    },

    gameDetails: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },

    gameOverText: {
        color: "#fff",
        fontSize: 16,
    }
});



