import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#32364D'
    },
    backButtom: {
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#5971FF',
        width: 40,
        height: 40,
        borderRadius: 50
    },
    title: {
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
    formContainer: {
        marginTop: 20,
        display: "flex"
    },
    label: {
        color: '#ffff',
        marginTop: 6,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    inputText: {
        width: '100%',
        height: 50,
        backgroundColor: '#434965',
        borderRadius: 15,
        paddingLeft: 20
    },
    buttom: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#647AFF',
        width: '40%',
        height: 60,
        borderRadius: 15,
        marginVertical: 10,

    },
    containerLinks: {
        display: "flex",
        flexDirection: "row",
        marginTop: 50
    },
    textRedirectLogin: {
        color: '#ffff',
        marginRight: 20
    },
    redirectLogin: {
        textDecorationStyle: "solid",
        textDecorationColor: "#ffff",
        textDecorationLine: "underline",
        display: "flex",
        //backgroundColor: '#ffff',
        color: '#647AFF',
        fontWeight: 'bold'
    },
    elementTR: {
        display: "flex",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#ffff",
        borderBottomLeftRadius: 200,
        marginTop: 0,
        width: 130,
        height: 130
    },
    elementBL: {
        display: "flex",
        shadowColor: "#5971FF",
        shadowOpacity: 100,
        shadowRadius: 40,
        alignSelf: "flex-start",
        marginTop: Dimensions.get('screen').height - 124,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#ffff",
        borderTopRightRadius: 200,
        width: 100,
        height: 100
    }
})

export default styles;

