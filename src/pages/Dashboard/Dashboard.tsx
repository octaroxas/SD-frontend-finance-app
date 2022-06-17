import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles/styles'

export default function Dashboard() {

    const { handleLogout, setAuthenticated } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <DashboardHeader />
            {/* <TouchableOpacity
                onPress={handleLogout}
                style={{ backgroundColor: '#999', padding: 10 }}
            >
                <Text>Logout</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}
