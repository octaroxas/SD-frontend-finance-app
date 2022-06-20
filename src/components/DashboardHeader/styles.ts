import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({

    gradientHeader: {
        paddingHorizontal: 40,
        paddingVertical: 30,
        display: "flex",
        position: "absolute",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 150,
        width: Dimensions.get('screen').width,
        backgroundColor: '#ffff',
    },
    containerTitleAndProfile: {
        flex: 1,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleSaudation: {
        color: '#ffff',
        fontSize: 12
    },
    userName: {
        fontWeight: 'bold',
        color: '#ffff',
        fontSize: 20
    },
    generalBalanceContainer: {
        marginTop: 0
    },
    balanceLabel: {
        fontSize: 12,
        color: '#ffff',
    },
    balance: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
})

export default styles