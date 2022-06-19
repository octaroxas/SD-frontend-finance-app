import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    topHeader: {
        position: 'absolute',

        borderStyle: 'solid',
        borderColor: 'transparent',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,

        display: 'flex',
        flex: 1,
        flexDirection: 'row',

        width: '118.5%',
        height: '16.5%'
    },

    backButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        paddingLeft: -24,

        width: 40,
        height: 40
    },

    text: {
        fontFamily: 'Nunito_400',
        color: 'white'
    },

    headerText: {
        fontFamily: 'Nunito_700',
        color: 'white',
        fontSize: 16,

        marginBottom: 4,
        marginLeft: 2
    },

    infoBox: {
        borderRadius: 15,
        borderColor: 'transparent',
        borderStyle: 'solid',

        backgroundColor: '#434965',

        marginVertical: 8,
        paddingVertical: 20,

        display: 'flex',
        flexDirection: 'row'
    },

    infoText: {
        fontFamily: 'Nunito_700',
        color: '#2F344B'
    },

    infoIcon: {
        marginHorizontal: 14
    },

    profilePic: {
        width: 100,
        height: 100,

        borderRadius: 100,
        marginBottom: 18
    },

    profileName: {
        fontFamily: 'Nunito_700',
        fontSize: 20,

        color: 'white'
    },

    profileHeader: {
        alignSelf: 'center',

        marginBottom: 29
    },

    optionsBlock: {
        marginVertical: 20
    },

    optionsButton: {
        marginVertical: 14,

        display: 'flex',
        flexDirection: 'row'
    },

    optionsIconDiv: {
        width: 30,
        height: 30,

        borderRadius: 100,
        borderColor: 'transparent',
        borderStyle: 'solid',

        backgroundColor: '#434965',

        display: 'flex',
        alignContent: 'center',
        alignSelf: 'flex-start',

        paddingVertical: 7
    },

    optionsIcon: {
        alignSelf: 'center'
    },

    optionsText: {
        color: 'white',
        fontFamily: 'Nunito_400',
        fontSize: 16,

        alignSelf: 'center',
        marginLeft: 11
    },

    container: {
        backgroundColor: '#32364D',

        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,

        paddingHorizontal: 40,
        paddingTop: 22
    }
})

export default styles
