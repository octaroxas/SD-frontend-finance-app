import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableNativeFeedbackBase
} from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import api from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

interface ICreateWallet {
    name: string
}

export default function CreateWallet() {
    const { setLoading } = useContext(AuthContext)

    const [walletName, setWalletName] = useState('')
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()
    const { navigate } = useNavigation()

    const createWallet = async ({ name }: ICreateWallet) => {
        if (name) {
            setLoading(true)
            const token = await AsyncStorage.getItem('@Finance-app:token')
            try {
                const { data } = await api.post(
                    '/wallet',
                    { name: name }
                )
                console.log(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)

            navigate('main')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Nome da carteira</Text>
                <Ionicons name="wallet" size={24} color="white" style={{alignSelf: 'flex-end'}} />
            </View>

            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Informe o nome da nova carteira"
                    />
                )}
            />

            <TouchableOpacity onPress={handleSubmit(createWallet)}>
                <LinearGradient
                    colors={['#5971FF', '#8355E5']}
                    style={styles.button}
                    start={{ x: 0.7, y: 0 }}
                >
                    <Ionicons name="add" size={20} color="white" />
                    <Text style={{ color: 'white', fontFamily: 'Nunito_700' }}>
                        Criar
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}
