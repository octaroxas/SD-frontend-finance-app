import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles'
import { ITransaction } from '../../@interfaces/ITransaction'
import { Ionicons, Feather } from '@expo/vector-icons'
import api from "../../api/api";
import { useRoute } from "@react-navigation/native";

interface IRouteTransacrionDetailsProps {
    id: string
}

const TransactionDetails = () => {

    const route = useRoute()

    const { id } = route.params as IRouteTransacrionDetailsProps

    return (
        <View>
            <Text>O id da transação é: {id}</Text>
        </View>
    )
}

export default TransactionDetails