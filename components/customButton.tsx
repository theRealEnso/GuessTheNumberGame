import { View, Pressable, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { ReactNode } from "react";

import colors from "@/constants/colors";

type CustomButtonProps = {
    onButtonPress?: (event: GestureResponderEvent) => void; // onButtonPress property is optional -- not every custom button will have this prop
    value: string | ReactNode;
};

const CustomButton = ({value, onButtonPress}: CustomButtonProps) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onButtonPress} 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={{color: colors.primary700}}
                >
                <View>
                    <Text style={styles.textColor}>{value}</Text>
                </View>
            </Pressable>
        </View>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    // combine outer and inner container to make sure visual ripple effect for button feedback looks as expected
    buttonOuterContainer: {
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 5,
        // padding: 4,
        overflow: "hidden", // make sure ripple effect doesn't flow outside of the container
    },

    buttonInnerContainer: {
        borderWidth: 1,
        borderColor: "#80163c",
        backgroundColor: "#80163c",
        padding: 8,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },

    pressed: {
        opacity: 0.75,
    },

    textColor: {
        color: "#fff",
    },
});