import { StyleSheet, View, Text, useWindowDimensions, Platform } from "react-native";

type ValueProps = {
    value: string;
}

const Title = ({value}: ValueProps) => {
    const {width, height} = useWindowDimensions();
    const isPortrait = height >= width;

    
    return (
        <View style={[styles.titleContainer, {marginTop: isPortrait ? 100 : 20, marginBottom: isPortrait ? 30 : 20}]}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "80%",
        width: 500,
    },

    text: {
        color: '#fff',
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: Platform.OS === "android" ? 2 : 0,
        paddingVertical: 12,
        paddingHorizontal: 24,
        fontSize: 24,
        fontFamily: "open-sans",
      },    
})

export default Title;