import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";
import { AuthContext } from "../../contexts/AuthContext";
import Transaction from "../Transaction/Transaction";
import styles from './styles'

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

const RecentMovimentations = () => {

    const { setLoading } = useContext(AuthContext)
    const [recents, setRecents] = useState<ITransactionList[]>()

    const getRecents = async () => {
        //setLoading(true)
        const { data } = await api.get(`/transaction`)
        setRecents(data[0].transactions)
        console.log('Array de recentes: ', recents)
        //setLoading(false)
    }

    useEffect(() => {
        getRecents()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Recentes</Text>
            <View style={styles.recentsContainer}>

                {!recents && <Text style={{ color: 'grey', fontWeight: "bold" }}>Sem transações</Text>}

                {recents?.map(({ id, amount, description, category, date, type: { type, display } }) => (
                    <Transaction
                        key={id}
                        description={description}
                        id={id}
                        amount={amount}
                        type={type}
                    />
                ))}

            </View>
        </View>
    )
}

export default RecentMovimentations