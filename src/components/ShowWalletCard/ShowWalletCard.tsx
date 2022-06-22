import { useRoute } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/AuthContext'

interface IShowWalletProps {
    id: string | number;
    nameWallet: string
}

const ShowWalletCard = ({ id, nameWallet }: IShowWalletProps) => {

    const { user: { account: { name } } } = useContext(AuthContext)
    const [balance, setBalance] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.headerWallet}>
                    <View>
                        <Text style={styles.headerWalletOwner}>
                            {name}
                        </Text>
                        <Text style={styles.walletName}>
                            {nameWallet}
                        </Text>
                    </View>
                    <View>
                        <Ionicons
                            name='wallet'
                            size={30}
                            color='white'
                        />
                    </View>
                </View>
                <View style={styles.footerWallet}>
                    <Text style={styles.labelGeneralBalance}>
                        Saldo disponível
                    </Text>
                    <Text style={styles.generalBalance}>
                        R$ {balance}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ShowWalletCard