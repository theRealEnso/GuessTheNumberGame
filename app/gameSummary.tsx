import { useContext } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useRouter } from "expo-router";

// import context
import { NumberContext } from "@/context/numberContext";

const GameSummary = () => {
    const router = useRouter();

    const { reset, guessCount, number } = useContext(NumberContext);

    // function to reset game
    const resetGame = () => {
        reset();
        router.push("/");
    };

    return (
        <LinearGradient style={styles.container} colors={["#3b021f", "#ddb52f"]}>
            <View style={styles.labelContainer}>
                <Text style={styles.gameOverText}>GAME OVER!</Text>
            </View>

            {/* image */}
            <View style={styles.imageContainer}>
                <Image 
                    source={require("../assets/images/success.png")}
                    style={styles.image}
                >
                </Image>
            </View>

            {/* game details */}
            <View style={styles.gameDetails}>
                <Text style={styles.text}>{`Your phone device needed ${guessCount} rounds`} </Text>
                <Text style={styles.text}>{`to guess the number ${number}.`}</Text>
                <View style={styles.pressable}>
                    <Pressable onPress={resetGame}>
                        <Text style={styles.text}>Start new game</Text>
                    </Pressable>
                </View>

            </View>
        </LinearGradient>
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
        borderColor: "#fff",
        borderWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginVertical: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
        borderWidth: 2,
        borderRadius: 150,
        borderColor: "black",
        overflow: "hidden",
    },

    image: {
        height: 300,
        width: 300,
        resizeMode: "cover",
    },

    gameDetails: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "80%",
        marginVertical: 50,
    },

    gameOverText: {
        color: "#fff",
        fontSize: 24,
    },

    text: {
        color: "#fff",
        fontSize: 18,
    },

    pressable: {
        marginTop: 30,
        backgroundColor: "#661130",
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
    }
});



