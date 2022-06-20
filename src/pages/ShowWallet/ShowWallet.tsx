import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../../api/api'
import ShowWalletCard from '../../components/ShowWalletCard/ShowWalletCard'
import Transaction from '../../components/Transaction/Transaction'
import styles from './styles'

interface IShowWalletProps {
    id: string;
}

const ShowWallet = () => {

    const route = useRoute()
    const { id } = route.params as IShowWalletProps
    const [listTransactions, setListTransactions] = useState()

    // const getTransactions = async () => {
    //     const { data } = await api.get(`/transaction/${id}`)
    // }

    return (
        <SafeAreaView style={styles.container}>
            <ShowWalletCard
                id={id}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Movimentações
                </Text>
            </View>

            <ScrollView
                style={styles.movimentationsHistory}
                showsVerticalScrollIndicator={false}
            >
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />

            </ScrollView>



        </SafeAreaView>
    )
}

export default ShowWallet
