import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../../api/api'
import ShowWalletCard from '../../components/ShowWalletCard/ShowWalletCard'
import Transaction from '../../components/Transaction/Transaction'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles'

interface IShowWalletProps {
    id: string;
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
    const [listTransactions, setListTransactions] = useState<ITransactionList[]>()

    // const getTransactions = async () => {
    //     const { data } = await api.get(`/transaction/${id}`)
    // }

    const { navigate } = useNavigation()

    const [walletBalance, setWalletBalance] = useState(0)
    const [generalBalance, setGeneralBalance] = useState()


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
        const wallet = data.filter((wallet) => wallet.id === id)
        console.log('Carteira e transacoes: ', wallet)
        const { transactions } = wallet as IlistTransactions
        //setGeneralBalance(amountSum)

        setListTransactions(transactions)
    }
    useEffect(() => {
        getWallet()
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
                {console.log('listTrans: ', listTransactions)}
                {listTransactions?.map(({ id, amount, description, type, category, date }) => (
                    <Transaction
                        id={id}
                        nameWallet={name}
                        amount={amount}
                        description={description}
                        key={id}
                    />
                ))}

                {/* <Transaction />
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
                <Transaction /> */}

            </ScrollView>



        </SafeAreaView>
    )
}

export default ShowWallet
