import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        display: "flex",
        backgroundColor: '#32364D',
        padding: 40
    },
    header: {
        display: "flex",
        flexDirection: "row",

        paddingHorizontal: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    label: {
        color: '#fff',
        fontFamily: 'Nunito_700',

        marginRight: 160
    },
    input: {
        backgroundColor: '#434965',
        padding: 15,
        borderRadius: 15,

        fontFamily: 'Nunito_400',
        color: 'white',
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#647AFF',
        width: '40%',
        height: 60,
        borderRadius: 50,
        marginVertical: 10,
        marginTop: 20,

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