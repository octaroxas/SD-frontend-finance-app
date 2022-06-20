import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IItem {
    name: string;
    value: string | boolean;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 40,
        marginVertical: 10,
    },
    nameItem: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff'

    },
    valueItem: {
        fontSize: 15,
        color: '#fff'

    }
})
const TransactionDetailItem = ({ name, value }: IItem) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameItem}>{name}</Text>
            <Text style={styles.valueItem}>{value}</Text>
        </View>

    )
}

export default TransactionDetailItem
