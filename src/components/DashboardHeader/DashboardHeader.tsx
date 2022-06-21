import React, { useContext } from "react";
import { IGeneralBalance } from "../../@interfaces/IGeneralBalance";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ITitle } from '../../@interfaces/ITitle'
import { Image, Text, View } from "react-native";
import styles from './styles'
import { AuthContext } from "../../contexts/AuthContext";

const DashboardHeader = () => {

    const ProfileImage = require('../../assets/profile/profile.png')
    const { user: { account: { name } } } = useContext(AuthContext)

    const Title = () => {
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
                <Title />
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