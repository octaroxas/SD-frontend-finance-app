import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import React from 'react'

interface Loading {
    message?: string;
}

export default function Loading({ message }: Loading) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color="#5971FF" />
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32364D',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})