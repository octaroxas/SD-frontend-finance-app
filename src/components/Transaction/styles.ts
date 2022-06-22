import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        //backgroundColor: '#393E56'
    },
    iconDescriptionContainer: {
        display: "flex",
        flexDirection: "row"
    },
    transactionIcon: {
        backgroundColor: '#434965',
        borderRadius: 20,
        padding: 5
    },
    transactionDescription: {
        marginLeft: 10
    },
    transactionName: {
        color: '#fff',
        fontSize: 12

    },
    walletName: {
        color: '#fff',
        fontSize: 10

    },
    balanceChevronContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },
    transactionAmountRevenue: {
        alignSelf: "center",
        color: '#2FBCA3',
        // color: 'white'

    },
    transactionAmountExpense: {
        alignSelf: "center",
        color: '#FF7A7A',
        // color: 'red'

    },
    arrowIcon: {
    }
})

export default styles