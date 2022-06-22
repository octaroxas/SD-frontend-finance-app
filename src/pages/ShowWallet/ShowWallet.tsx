import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../../api/api'
import ShowWalletCard from '../../components/ShowWalletCard/ShowWalletCard'
import Transaction from '../../components/Transaction/Transaction'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles'

interface IShowWalletProps {
    id: number;
    name: string
}

interface IRouteTransacrionDetailsProps {
    id: string
}

interface IlistTransactions {
    id: number,
    name: string,
    transactions: Array<ITransactionList>,
}

interface ITransactionList {
    id: number,
    type: {
        type: string,
        display: string
    },
    description: string,
    amount: number,
    date: string,
    done: boolean,
    category: {
        id: number,
        name: string
    }
}

const ShowWallet = () => {

    const { setLoading } = useContext(AuthContext)

    const route = useRoute()
    const { id, name } = route.params as IShowWalletProps
    const [allTransactions, setAllTransactions] = useState<IlistTransactions[]>([])
    const [wallet, setWallet] = useState<IlistTransactions>()
    const [selectedTransactions, setSelectedTransactions] = useState<ITransactionList[]>([])

    const { navigate } = useNavigation()

    const deleteWallet = async () => {
        setLoading(true)
        try {
            await api.delete(`/wallet/${id}`)
            setLoading(false)
        } catch (error) {

        }
        navigate('main')
    }
    const getWallet = async () => {

        const { data } = await api.get('/transaction')

        setWallet(data.filter((wallet) => wallet.id === Number(id)))

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(id)) {
                setSelectedTransactions(data[i].transactions)
            }
        }

        //setSelectedTransactions(data[0].transactions)
    }
    useEffect(() => {
        // setLoading(true)
        getWallet()
        // setLoading(false)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ShowWalletCard
                id={id}
                nameWallet={name}
            />
            <View style={styles.buttonsContainer}>
                {/* <TouchableOpacity>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={deleteWallet}>
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
                {/* <Transaction
                    id={22}
                    description='Spokas Grill'
                    amount={20}
                    type='income'
                    nameWallet='Carteira Padrão'
                /> */}
                {selectedTransactions.length <= 0 && <ActivityIndicator size={100} />}
                {selectedTransactions && selectedTransactions.map(({ id, amount, description, category, date, type: { type, display } }) => (
                    <Transaction
                        key={id}
                        description={description}
                        id={id}
                        amount={amount}
                        type={type}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ShowWallet
