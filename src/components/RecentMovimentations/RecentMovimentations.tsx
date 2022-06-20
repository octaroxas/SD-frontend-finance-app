import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Transaction from "../Transaction/Transaction";
import styles from './styles'

const RecentMovimentations = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Recentes</Text>
            <View style={styles.recentsContainer}>
                <Transaction
                    id="1"
                // amount={12}
                // type='Receita'
                // walletId='1'
                />

                <Transaction
                    id="1"
                    amount={12}
                    type='Receita'
                    walletId='1'
                />

                <Transaction
                    id="1"
                    amount={12}
                    type='Receita'
                    walletId='1'
                />

                <Transaction
                    id="1"
                    amount={12}
                    type='Receita'
                    walletId='1'
                />

                <Transaction
                    id="1"
                    amount={12}
                    type='Receita'
                    walletId='1'
                />
            </View>
        </View>
    )
}

export default RecentMovimentations