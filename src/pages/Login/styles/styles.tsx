import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    login: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#32364D',
    },
    title: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 38,
        marginTop: 20,
        color: '#ffff',
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 10,
        color: '#ffff',
        width: 200,
        marginTop: 5
    },

    text: {
        fontFamily: 'Nunito_400Regular',
        color: 'white',
    },

    header: {
        paddingBottom: 33,
        paddingTop: 60,
        paddingRight: 112,

        marginLeft: 37,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 36,

        color: 'white',
    },

    headerSubText: {
        fontSize: 8,

        color: 'white',

        lineHeight: 10.9,
    },

    headerDetail: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderBottomLeftRadius: 125.5,
        borderColor: 'transparent',

        width: 138,
        height: 129,

        alignSelf: 'flex-end',
    },

    input: {
        display: 'flex',

        marginHorizontal: 37,
        backgroundColor: '#434965',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: 'transparent',

        paddingLeft: 31,
        paddingTop: 19,
        paddingBottom: 14,
        marginBottom: 30,

        color: 'white',
    },

    button: {
        alignItems: 'center',

        width: 146,
        height: 54,

        borderRadius: 15,

        paddingVertical: 19,

        marginLeft: 26,
        marginTop: -13,
    },

    buttonText: {
        fontFamily: 'Nunito_700Bold',

        color: 'white',
    },
});

export default styles