import React, { useContext } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

// import context
import { NumberContext } from "../context/numberContext";

type SetShowModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const HintModal = ({setShowModal}: SetShowModalProps) => {
    const {hintMessage} = useContext(NumberContext);

    return (
        <Modal animationType="fade">
            <View style={styles.container}>
                <View style={styles.elementsContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Don&apos;t lie now...</Text>
                        <Text style={styles.text2}>{`That was the wrong hint! You need to ${hintMessage}`}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => setShowModal(false)} style={styles.pressable}>
                            <Text>Sorry!</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#1e1d1f",
        // borderWidth: 2,
        // borderColor: "red",
        // width: "99%",
    },

    elementsContainer: {
        width: "90%",
    },
    
    textContainer: {
        marginHorizontal: 25,
    },

    buttonContainer: {
        alignItems: "flex-end",
        marginTop: 10,
    },

    pressable: {
        backgroundColor: "#fcba03",
        color: "black",
        borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },

    text1: {
        fontSize: 20,
        color: "#fff",
    },

    text2: {
        color: "#88878a",
    }

})

export default HintModal;