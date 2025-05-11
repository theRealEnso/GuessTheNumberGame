import { View, Pressable, StyleSheet, GestureResponderEvent } from "react-native";
import { ReactNode } from "react";

type CustomButtonProps = {
    children: ReactNode;
    onButtonPress?: (event: GestureResponderEvent) => void; // onButtonPress property is optional -- not every custom button will have this prop
}

const CustomButton = ({children, onButtonPress}: CustomButtonProps) => {
    return (
        <View style={styles.pressable}>
            <Pressable onPress={onButtonPress}>
                {children}
            </Pressable>
        </View>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
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
});