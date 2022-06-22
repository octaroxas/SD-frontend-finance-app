import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: '#32364D'
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: 'row-reverse',
        marginHorizontal: 40,
    },
    buttonText: {
        color: '#fff',
        margin: 10,
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10
    },
    titleContainer: {
        borderBottomColor: '#4B5068',
        borderBottomWidth: 1,
        marginHorizontal: 25
    },
    title: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    movimentationsHistory: {
        marginHorizontal: 25,
        marginVertical: 20
    }
})

export default styles