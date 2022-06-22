import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

interface IPropsRoute {
    id: string | number
}

export const EditTransaction = () => {

    const route = useRoute()
    const { id } = route.params as IPropsRoute
    return (
        <View>
            <Text>Editar transaction</Text>
            <Text>Id: {id}</Text>
        </View>
    )
}
