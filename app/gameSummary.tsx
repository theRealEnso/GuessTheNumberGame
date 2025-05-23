import { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useRouter } from "expo-router";

// import context
import { NumberContext } from "@/context/numberContext";

// import components
import CustomButton from "@/components/customButton";

// import colors
import colors from "@/constants/colors";

const GameSummary = () => {
    const {width, height} = useWindowDimensions();
    const isPortrait = height >= width;

    const router = useRouter();

    const [hasReset, setHasReset] = useState<boolean>(false);

    const { reset, guessCount, number } = useContext(NumberContext);

    // function to reset game
    const resetGame = () => {
        reset();
        setHasReset(true);
    };

    // move navigation logic into useEffect in order to fix issue where calling reset() updated state and caused component to re-render before navigation was being executed, which made the GameSummary re-render with reset values without navigating user back to the main screen. 
    useEffect(() => {
        if(hasReset){
            router.replace("/");
        }
    },[hasReset, router]);

    return (
        <LinearGradient style={[styles.container]} colors={[colors.primary500, colors.secondary500]}>
            <View style={[styles.titleContainer, {marginTop: isPortrait ? 40 : 40, marginBottom: isPortrait ? 40 : 20}]}>
                <Text style={styles.gameOverText}>GAME OVER!</Text>
            </View>

            {/* image */}
            <View 
                style={[
                    styles.imageContainer, 
                    {
                        width: isPortrait ? 300 : 150, 
                        height: isPortrait ? 300 : 150, 
                        borderRadius: isPortrait ? 150 : 75,
                    }
                ]}
            >
                <Image 
                    source={require("../assets/images/success.png")}
                    style={[styles.image, {width: isPortrait ? 300 : 150, height: isPortrait ? 300 : 150}]}
                >
                </Image>
            </View>

            {/* game details */}
            <View style={[styles.gameDetails, {marginTop: isPortrait ? 40 : 20, marginBottom: isPortrait ? 40 : 20}]}>
                <Text style={styles.text}>Your phone device needed <Text style={styles.textHighlight}>{guessCount}</Text> rounds </Text>
                <Text style={styles.text}>to guess the number <Text style={styles.textHighlight}>{number}.</Text></Text>
                <CustomButton value="Start new game" onButtonPress={resetGame}></CustomButton>
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

    titleContainer: {
        borderColor: "#fff",
        borderWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 4,
        // marginVertical: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        overflow: "hidden",
        objectFit: "cover",
    },

    image: {
        // height: 300,
        // width: 300,
        resizeMode: "cover",
        objectFit: "cover"
    },

    gameDetails: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "80%",
        // marginVertical: 50,
    },

    gameOverText: {
        color: "#fff",
        fontSize: 24,
        fontFamily: "open-sans-bold",
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
    },

    textHighlight: {
        color: colors.primary800,
    }
});



