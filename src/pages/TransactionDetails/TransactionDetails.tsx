import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { ITransaction } from '../../@interfaces/ITransaction'
import { Ionicons, Feather } from '@expo/vector-icons'
import api from "../../api/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TransactionDetailItem from "../../components/TransactionDetailItem/TransactionDetailItem";

interface IRouteTransacrionDetailsProps {
    id: string
}

interface TypeTrasact {
    type: string;
    display: string
}

interface ITransactionDetails {
    id: number,
    type: TypeTrasact,
    description: string,//"Crédito RU",
    amount: string,//"50",
    date: string,//"2022-06-01",
    done: boolean,//true,
    category: {
        id: number,
        name: string,//"Saúde"
    }
}

const TransactionDetails = () => {

    const { navigate } = useNavigation()
    const route = useRoute()
    const { id } = route.params as IRouteTransacrionDetailsProps
    const [transaction, setTransaction] = useState({
        id: 1,
        type: {
            type: "expense",
            display: "Despesa"
        },
        description: "Crédito RU",
        amount: "50",
        date: "2022-06-01",
        done: true,
        category: {
            id: 1,
            name: "Saúde"
        }
    } as ITransactionDetails)


    const deleteTransaction = async () => {
        await api.delete(`/transaction/${id}`)
    }

    const toEditTransaction = () => {
        navigate('edit_transaction', { id: id })
    }

    const getTransaction = async () => {

        api.defaults.headers.common['Authorization'] = `Bearer ${AsyncStorage.getItem('@Finance-app:token')}`
        const { data } = await api.get(`/transaction/${id}`)
        setTransaction(data)
    }

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.transactionTitleButtonContainer}>
                <Text style={styles.transactionTitle}>{transaction.description}</Text>
                <View style={styles.buttonsContainer}>

                    <TouchableOpacity
                        style={styles.buttonNavigatios}
                        onPress={toEditTransaction}
                    >
                        <Feather
                            name="edit"
                            color='#fff'
                            size={20}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonNavigatios}
                        onPress={deleteTransaction}
                    >
                        <Feather
                            name="trash"
                            color='#fff'
                            size={20}
                        />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.itemsContainer}>

                <TransactionDetailItem
                    name="Tipo de movimentação"
                    value={transaction.type.display}
                />
                <TransactionDetailItem
                    name="Valor"
                    value={transaction.amount}
                />
                <TransactionDetailItem
                    name="Data de criação"
                    value={transaction.date}
                />
                <TransactionDetailItem
                    name="Categoria"
                    value={transaction.category.name}
                />
                <TransactionDetailItem
                    name="Status"
                    value={transaction.done}
                />

            </View>
        </SafeAreaView>
    )
}

export default TransactionDetails