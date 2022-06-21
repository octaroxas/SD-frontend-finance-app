import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        display: "flex",
        backgroundColor: '#32364D',
        padding: 40
    },
    label: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        backgroundColor: '#434965',
        padding: 15,
        borderRadius: 15
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#647AFF',
        width: '40%',
        height: 60,
        borderRadius: 15,
        marginVertical: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
})

export default styles