import React, { useContext } from "react";
import { StyleSheet, View, Text, Pressable, Modal, useWindowDimensions } from "react-native";
import { NumberContext } from "../context/numberContext";

type SetShowModalProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const HintModal = ({ setShowModal }: SetShowModalProps) => {
    const { hintMessage } = useContext(NumberContext);
    const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;

    return (
        <Modal animationType="fade" transparent={false} presentationStyle="pageSheet">
            <View
                style={[
                styles.container,
                {
                    flexDirection: isPortrait ? 'column' : 'row',
                    padding: isPortrait ? 20 : 40,
                }
                ]}
            >
                <View style={[styles.elementsContainer, { width: isPortrait ? '90%' : '70%' }]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Don't lie now...</Text>
                    <Text style={styles.text2}>{`That was the wrong hint! You need to ${hintMessage}`}</Text>
                </View>
                <View style={[styles.buttonContainer, {alignItems: isPortrait ? "flex-end" : "flex-start", marginLeft: isPortrait ? null : 20}]}>
                    <Pressable onPress={() => setShowModal(false)} style={styles.pressable}>
                    <Text style={styles.text3}>Sorry!</Text>
                    </Pressable>
                </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#1e1d1f",
    },
    elementsContainer: {
        // alignSelf: "center",
        justifyContent: "center",
    },

    textContainer: {
        marginHorizontal: 25,
    },
    buttonContainer: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    pressable: {
        backgroundColor: "#fcba03",
        borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    text1: {
        fontSize: 20,
        color: "#fff",
    },
    text2: {
        color: "#88878a",
    },
    text3: {
        fontSize: 20,
        color: "black"
    }
})

export default HintModal;
