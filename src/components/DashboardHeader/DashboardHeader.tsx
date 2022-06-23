import React, { useContext, useEffect, useState } from "react";
import { IGeneralBalance } from "../../@interfaces/IGeneralBalance";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ITitle } from '../../@interfaces/ITitle'
import { Image, Text, View } from "react-native";
import styles from './styles'
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../api/api";
import { Wallet } from "../../@types/Wallet";

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


const DashboardHeader = () => {

    const getAvatarUrl = async () => {
        const { data } = await api.get(`/account/${id}`)
        setAvatar(data.avatar)
    }
    const ProfileImage = require('../../assets/profile/profile.png')
    const { user: { account: { name, id } } } = useContext(AuthContext)
    const [walletTransactions, setWalletTransactions] = useState<IlistTransactions[]>([])
    const [generalBalance, setGeneralBalance] = useState<number>()
    const [avatarURL, setAvatarURL] = useState()
    const [avatar, setAvatar] = useState('')
    const { handleLogout, setAuthenticated, setLoading } = useContext(AuthContext)


    const Title = () => {
        return (
            <View>
                <Text style={styles.titleSaudation}>Olá, Bem vindo!</Text>
                <Text style={styles.userName} >{name}</Text>
            </View>
        )
    }

    const GeneralBalance = () => {


        return (
            <View style={styles.generalBalanceContainer}>
                <Text style={styles.balanceLabel}>Saldo total</Text>
                <Text style={styles.balance}>R$ {generalBalance}</Text>
            </View>
        )
    }
    // const sumBalances = () => {

    //     let total = 0
    //     for (let i = 0; i < walletTransactions.length; i++) {
    //         for (let j = 0; j < walletTransactions[i].transactions.length; j++) {

    //             if (walletTransactions[i].transactions[j].type.type === "income") {
    //                 total = total + walletTransactions[i].transactions[j].amount;
    //                 console.log(total)
    //             }
    //         }
    //     }
    //     setGeneralBalance(0)
    //     setGeneralBalance(total)
    // }
    const getWallet = async () => {

        const { data } = await api.get('/transaction')
        setWalletTransactions(data)

        let total = 0
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].transactions.length; j++) {

                if (data[i].transactions[j].type.type === "income") {
                    total = total + data[i].transactions[j].amount;
                    console.log(total)
                }
            }
        }
        //setGeneralBalance(0)
        console.log('total: ', total)
        setGeneralBalance(total)

    }
    useEffect(() => {
        // setLoading(true)
        getWallet()
        //sumBalances()
        getAvatarUrl()
        // setLoading(false)
    }, [])

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
                    source={{ uri: avatar }}
                />
            </View>
            <GeneralBalance
                balance={generalBalance}
            />

        </LinearGradient>
    )
}

export default DashboardHeader
