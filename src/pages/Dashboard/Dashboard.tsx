import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../../api/api'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import RecentMovimentations from '../../components/RecentMovimentations/RecentMovimentations'
import { ResumeMovimentarions } from '../../components/ResumeMovimentarions/ResumeMovimentarions'
import WalletCard from '../../components/WalletCard/WalletCard'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles/styles'
import { Wallet } from '../../@types/Wallet'

const notwaletsstyle = StyleSheet.create({
    cardWarning: {
        backgroundColor: '#393E56',
        height: 100,
        width: 200,
        borderRadius: 20,
        padding: 20,
        borderColor: '#FF7A7A',
        borderWidth: 1
    },
    textCard: {
        color: '#fff',
        fontWeight: 'bold'
    },
})




export default function Dashboard() {

    const NotWallets = () => {
        return (
            <TouchableOpacity style={notwaletsstyle.cardWarning}>
                <Text style={notwaletsstyle.textCard}>
                    Você não possui carteiras
                </Text>

            </TouchableOpacity>
        )
    }

    const [wallets, setWallet] = useState<Wallet[]>()
    const { handleLogout, setAuthenticated } = useContext(AuthContext)

    const { navigate } = useNavigation()


    useEffect(() => {
        const getWallet = async () => {
            //const token = await AsyncStorage.getItem('@Finance-app:token')
            //console.log('Token get Wallet dashboard: ', token)
            //api.defaults.headers.common['Authorization'] = `Bearer 19|9V8Xei5NNpz2234t5SEk85mWsHzIgxsAcKL5vVBL`

            try {
                const { data } = await api.get('/wallet')
                setWallet(data)

            } catch (error) {
                console.log(error)
            }
        }
        getWallet()
    }, [])

    // <ScrollView
    //                     horizontal={true}
    //                     showsHorizontalScrollIndicator={false}
    //                     contentContainerStyle={{ marginLeft: 40, marginRight: 40, paddingRight: 60, marginTop: 180 }}
    //                 >
    //                     {/* {wallet?.map(wallet => (
    //                         <WalletCard
    //                         id={wallet.id}
    //                         name={wallet.name}
    //                         //balance={200}
    //                         />
    //                     ))} */}

    //                 </ScrollView>

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <DashboardHeader />
                <View style={{ marginTop: 180, paddingLeft: 10 }}>
                    {!wallets && <NotWallets />}

                    {
                        wallets && <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={({ name }) => name}
                            data={wallets}
                            renderItem={({ index, item: { id, name } }) => <WalletCard id={id} name={name} />}
                        />
                    }
                </View>
                <RecentMovimentations />
                <ResumeMovimentarions />
            </SafeAreaView>
        </ScrollView>
    )
}
