import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: '#32364D',
        paddingHorizontal: 40
    },
    label: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5
    },
    input: {
        color: '#fff',
        backgroundColor: '#434965',
        height: 60,
        borderRadius: 15,
        paddingLeft: 20
    },
    button: {
        backgroundColor: '#647AFF',
        borderRadius: 20,
        maxWidth: 120,
        padding: 20,
        marginVertical: 50
    },
    buttonText: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: "center",
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
    }
})

export default styles