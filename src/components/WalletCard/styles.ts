import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    card: {
        display: "flex",
        marginHorizontal: 5,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#5971FF',
        width: 150,
        height: 180,
        borderRadius: 20
    },
    walletIcon: {
        alignSelf: "flex-end"
    },
    textContainer: {

    },
    walletName: {
        color: '#fff',
        fontSize: 12
    },
    walletBalance: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    }
})