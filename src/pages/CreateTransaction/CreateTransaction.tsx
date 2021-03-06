import React, { useContext, useEffect, useState } from 'react'
import { Picker } from '@react-native-community/picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import api from '../../api/api'
import RNPickerSelect from "@react-native-community/picker";
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { AuthContext } from '../../contexts/AuthContext'

type wallet = {
    id: number;
    name: string;
}

type categories = {
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

    const { setLoading } = useContext(AuthContext)
    const [walets, setWalets] = useState<wallet[]>()
    const [typeTransactions, setTypeTransactions] = useState()
    const [categories, setCategories] = useState<categories[]>()

    const [date, setDate] = useState(new Date())

    const getWallets = async () => {
        const { data } = await api.get('/wallet')
        setWalets(data)
        console.log(walets)
    }

    const getCategories = async () => {
        const { data } = await api.get('/category')
        setCategories(data)
    }

    const getTypeTran = async () => {
        //const { data } = await api.get('/wallet')
        //setWallets(data)
    }





    useEffect(() => {
        getWallets()
        getCategories()
    }, [])

    //const [selectedValue, setSelectedValue] = useState("java");
    const [wallet, setWallet] = useState() as any;
    const [typeTran, setTypeTran] = useState() as any;
    const [categ, setCateg] = useState() as any
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [dat, setDat] = useState(new Date()) as any


    const getPrice = (valor: any) => {
        setPrice(valor)
    }

    const createTransaction = async () => {

        const transaction = {
            type: typeTran,
            description: desc,
            amount: price,
            date: "2022-06-01",
            done: true,
            category_id: categ,
            wallet_id: wallet
        }

        console.log('transaction object', transaction)
        setLoading(true)
        const { data } = await api.post('/transaction', transaction)
        console.log(data)
        setLoading(false)

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
                        {walets && walets.map(({ id, name }) => (
                            <Picker.Item key={id} label={name} value={id} />
                        ))}
                    </Picker>
                </View>

                <View >
                    <Text style={styles.label}>Tipo de transa????o</Text>
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
                    {categories && categories.map(({ id, name }) => (
                        <Picker.Item key={id} label={name} value={id} />
                    ))}
                    {/* <Picker.Item label="Sa??de" value={1} />
                    <Picker.Item label="Casa" value={2} />
                    <Picker.Item label="Alimenta????o" value={3} />
                    <Picker.Item label="Outros" value={4} /> */}
                </Picker>
            </View>

            <Text style={styles.label}>Descri????o</Text>
            <TextInput style={styles.input} placeholder='Informe a descri????o' onChangeText={setDesc} />
            <Text style={styles.label}>Valor</Text>
            <TextInput style={styles.input} placeholder='Informe o valor da transa????o' keyboardType="numeric" onChangeText={getPrice} />


            <TouchableOpacity style={styles.button} onPress={createTransaction}>
                <Text style={styles.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default CreateTransaction
