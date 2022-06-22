import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 40,
        marginBottom: 70
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    resumeContent: {
        display: "flex",
        backgroundColor: '#393E56',
        marginVertical: 10,
        borderRadius: 20, padding: 20
    },
    graphicContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    labelGreen: {
        color: '#00B7C2'
    },
    labelRed: {
        color: '#FF7A7A'
    }
})

export default styles