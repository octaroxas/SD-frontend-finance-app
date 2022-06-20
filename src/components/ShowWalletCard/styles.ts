import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column'
    },
    card: {
        backgroundColor: '#5971FF',
        borderRadius: 20,
        padding: 30,
        marginHorizontal: 20,
        height: 180,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerWallet: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    headerWalletOwner: {
        fontWeight: "bold",
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Nunito_700'
    },
    walletName: {
        fontWeight: '100',
        fontSize: 15,
        color: '#fff',
    },
    footerWallet: {
        alignSelf: 'flex-end',
    },
    labelGeneralBalance: {
        color: '#fff',
        textAlign: 'right'
    },
    generalBalance: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 30
    }
})

export default styles