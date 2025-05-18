import { StyleSheet, View, Text } from "react-native";

type ValueProps = {
    value: string;
}

const Title = ({value}: ValueProps) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    text: {
        color: '#fff',
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 24,
        fontSize: 24,
      },    
})

export default Title;