import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-community/picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import api from '../../api/api'
import RNPickerSelect from "@react-native-community/picker";
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

type wallet = {
    id: number;
    name: string;
}

interface ICreateTransaction {
    account: number;
    type: string,
    description: string,
    amount: string,
    date: string,
    done: boolean,
    category_id: number,
    wallet_id: number
}

const CreateTransaction = () => {

    const [walets, setWallets] = useState<wallet[]>()
    const [typeTransactions, setTypeTransactions] = useState()
    const [categories, setCategories] = useState()

    const [date, setDate] = useState(new Date())

    const getWallets = async () => {
        const { data } = await api.get('/wallet')
        setWallets(data)
    }
    const getTypeTran = async () => {
        //const { data } = await api.get('/wallet')
        //setWallets(data)
    }
    const getCategories = async () => {
        //const { data } = await api.get('/categories')
        //setWallets(data)
    }





    useEffect(() => {

    }, [])

    //const [selectedValue, setSelectedValue] = useState("java");
    const [wallet, setWallet] = useState();
    const [typeTran, setTypeTran] = useState();
    const [categ, setCateg] = useState()


    const createTransaction = async () => {
        const transaction = {

        }
        const { data } = await api.post('/transaction')
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginBottom: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

                <View>
                    <Text style={styles.label}>Conta</Text>
                    <Picker
                        selectedValue={wallet}
                        style={{ height: 50, width: 150, color: '#fff', backgroundColor: '#434965' }}
                        onValueChange={(itemValue, itemIndex) => setWallet(itemValue)}
                    >
                        <Picker.Item label="Conta principal" value="1" />
                        <Picker.Item label="Nubank" value="2" />
                        <Picker.Item label="Inter" value="3" />
                    </Picker>
                </View>

                <View >
                    <Text style={styles.label}>Tipo de transação</Text>
                    <Picker
                        selectedValue={typeTran}
                        style={{ height: 50, width: 150, color: '#fff', backgroundColor: '#434965' }}
                        onValueChange={(itemValue, itemIndex) => setTypeTran(itemValue)}
                    >
                        <Picker.Item label="Rendimento" value="income" />
                        <Picker.Item label="Despesa" value="expense" />
                    </Picker>
                </View>
            </View>

            <View style={{ marginBottom: 20 }}>
                <Text style={styles.label}>Categoria</Text>
                <Picker
                    selectedValue={categ}
                    style={{ height: 50, width: '100%', color: '#fff', backgroundColor: '#434965' }}
                    onValueChange={(itemValue, itemIndex) => setCateg(itemValue)}
                >
                    <Picker.Item label="Saúde" value="Saúde" />
                    <Picker.Item label="Casa" value="Casa" />
                    <Picker.Item label="Alimentação" value="Alimentação" />
                    <Picker.Item label="Outros" value="Outros" />
                </Picker>
            </View>

            <Text style={styles.label}>Descrição</Text>
            <TextInput style={styles.input} placeholder='Informe a descrição' />
            <Text style={styles.label}>Valor</Text>
            <TextInput style={styles.input} placeholder='Informe o valor da transação' />

            <Text style={styles.label}>Data</Text>

            <TouchableOpacity style={styles.button} onPress={createTransaction}>
                <Text style={styles.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default CreateTransaction
