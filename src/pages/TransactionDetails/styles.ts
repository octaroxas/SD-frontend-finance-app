import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32364D'
    },
    itemsContainer: {
        // backgroundColor: '#393E56',
        // borderRadius: 20,
        marginHorizontal: 40,
        marginTop: 20,
    },
    transactionTitleButtonContainer: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: '#4B5068',
        borderBottomWidth: 1,
        marginHorizontal: 40,
        justifyContent: "space-between"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    transactionTitle: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 5
    },
    buttonNavigatios: {
        backgroundColor: '#434965',
        borderRadius: 20,
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    transactionInfo: {
        color: '#fff'
    }
})

export default styles