import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import RecentMovimentations from '../../components/RecentMovimentations/RecentMovimentations'
import { ResumeMovimentarions } from '../../components/ResumeMovimentarions/ResumeMovimentarions'
import WalletCard from '../../components/WalletCard/WalletCard'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles/styles'

export default function Dashboard() {

    const { handleLogout, setAuthenticated } = useContext(AuthContext)

    const { navigate } = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <DashboardHeader />
            <View style={{ marginBottom: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginLeft: 40, marginRight: 40, paddingRight: 60, marginTop: 180 }}
                >
                    <WalletCard
                        name='Carteira local'
                        balance={200}
                        id='1'
                    />
                    <WalletCard
                        name='Nubank'
                        balance={200}
                        id='2'
                    />
                    <WalletCard
                        name='Inter'
                        balance={200}
                        id='3'
                    />
                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <RecentMovimentations />
                <ResumeMovimentarions />
            </ScrollView>
        </SafeAreaView>
    )
}
