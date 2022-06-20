import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'

interface IShowWalletProps {
    id: string;
}

const ShowWalletCard = ({ id }: IShowWalletProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.headerWallet}>
                    <View>
                        <Text style={styles.headerWalletOwner}>
                            Octacílio C.
                        </Text>
                        <Text style={styles.walletName}>
                            Carteira Principal
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
                        R$ 200.00
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ShowWalletCard