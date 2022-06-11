import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles/styles'

export default function Dashboard() {

    const [counter, setCounter] = useState(0)

    const { handleLogout } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <Text>Dashboard  counter: {counter}</Text>
            <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: '#999', padding: 10 }}>
                <Text>Add counter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
