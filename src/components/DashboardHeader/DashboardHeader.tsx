import React from "react";
import { IGeneralBalance } from "../../@interfaces/IGeneralBalance";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ITitle } from '../../@interfaces/ITitle'
import { Image, Text, View } from "react-native";
import styles from './styles'

const DashboardHeader = () => {

    const ProfileImage = require('../../assets/profile/profile.png')

    const Title = ({ name }: ITitle) => {
        return (
            <View>
                <Text style={styles.titleSaudation}>Olá, Bem vindo!</Text>
                <Text style={styles.userName} >{name}</Text>
            </View>
        )
    }

    const GeneralBalance = ({ balance }: IGeneralBalance) => {
        return (
            <View style={styles.generalBalanceContainer}>
                <Text style={styles.balanceLabel}>Saldo total</Text>
                <Text style={styles.balance}>R$ {balance}</Text>
            </View>
        )
    }

    return (

        <LinearGradient
            colors={['#5971FF', '#5971FF', '#939BD7']}
            style={styles.gradientHeader}
            start={{ x: 0.7, y: 0 }}
        >
            <View style={styles.containerTitleAndProfile}>
                <Title name='Octacílio C.' />
                <Image
                    style={styles.profileImage}
                    source={ProfileImage}
                />
            </View>
            <GeneralBalance
                balance={500}
            />

        </LinearGradient>
    )
}

export default DashboardHeader