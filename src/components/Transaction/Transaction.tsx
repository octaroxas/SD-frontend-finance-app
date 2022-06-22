import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { ITransaction } from '../../@interfaces/ITransaction'
import { Ionicons, Feather } from '@expo/vector-icons'
import api from "../../api/api";
import { useNavigation } from "@react-navigation/native";

interface ITransactionProps {
    id?: number | string,
    walletId?: number | string,
    type?: string,
    amount: number,
    description: string,
    nameWallet?: string
}
const Transaction = (data: ITransactionProps) => {

    const { navigate } = useNavigation()

    const [transaction, setTransaction] = useState(data)

    const getTransaction = async () => {

        // const { data } = await api.get(`/transaction/${id}`)
        // const data = {
        //     id: '1',
        //     walletId: '1',
        //     type: 'revenue',
        //     amount: 120,
        //     description: 'gasolina',
        //     walletName: 'Nubank'
        // }
        // setTransaction(data)
    }

    useEffect(() => {
        getTransaction()
    }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigate('transaction_details', { id: transaction.id }) }}>
            <View style={styles.iconDescriptionContainer}>
                <Ionicons
                    style={styles.transactionIcon}
                    name='wallet'
                    size={30}
                    color='#fff'
                />

                <View style={styles.transactionDescription}>
                    <Text style={styles.transactionName}>{transaction.description}</Text>
                    <Text style={styles.walletName}>{transaction.nameWallet}</Text>
                </View>
            </View>


            <View style={styles.balanceChevronContainer}>

                {transaction.type === 'income' ? <Text style={styles.transactionAmountRevenue}>R$ {transaction.amount}</Text> : <Text style={styles.transactionAmountExpense}>R$ {transaction.amount}</Text>
                }


                <Feather
                    color='#4B5068'
                    size={20}
                    style={styles.arrowIcon}
                    name="chevron-right"
                />
            </View>
        </TouchableOpacity>
    )
}

export default Transaction

/**

$table->id();
            $table->string('type', 15);
            $table->string('description');
            $table->float('amount');
            $table->date('date');
            $table->boolean('done');
            $table->foreignIdFor(App\Models\Category::class)->constrained();
            $table->foreignIdFor(App\Models\Wallet::class)->constrained();
            $table->timestamps();
 */