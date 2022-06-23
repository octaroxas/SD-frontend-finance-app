import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import api from '../../api/api'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles/styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface IUser {
    name: string
    email: string
}

export default function Profile({ navigation }: any) {
    const { goBack, navigate } = useNavigation()
    const { handleLogout } = useContext(AuthContext)
    //const [user, setUser] = useState({} as IUser)
    const [avatar, setAvatar] = useState('')

    const { user: { account: { name, id }, email } } = useContext(AuthContext)

    const backPage = () => {
        goBack()
    }

    const toEditProfile = () => {
        navigation.navigate('EditProfile')
    }

    const getAvatarUrl = async () => {
        const { data } = await api.get(`/account/${id}`)
        setAvatar(data.avatar)
    }

    useEffect(() => {
        getAvatarUrl()
        // const getProfile = async () => {
        //     const { data } = await api.get('/profile')
        //     setUser({
        //         name: data.name,
        //         email: data.email
        //     })
        // }
        // getProfile()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#5971FF', '#939BD7']}
                style={styles.topHeader}
            />

            <TouchableOpacity onPress={backPage} style={styles.backButton}>
                <Feather name="chevron-left" color="white" size={30} />
            </TouchableOpacity>

            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: avatar }}
                    //source={require('../../assets/profile_pic.png')}
                    style={styles.profilePic}
                />
                {name ? (
                    <Text style={styles.profileName}>{name}</Text>
                ) : (
                    <Text style={styles.profileName}>{name}</Text>
                )}
            </View>
            <View>
                <Text style={styles.headerText}>Dados pessoais</Text>
            </View>
            <View>
                <View style={styles.infoBox}>
                    <Feather
                        name="user"
                        size={15}
                        color="#2F344B"
                        style={styles.infoIcon}
                    />
                    {name ? (
                        <Text style={styles.infoText}>{name}</Text>
                    ) : (
                        <Text style={styles.infoText}>
                            Octacílio Carvalho de Almeida
                        </Text>
                    )}
                </View>
                <View style={styles.infoBox}>
                    <Feather
                        name="mail"
                        size={15}
                        color="#2F344B"
                        style={styles.infoIcon}
                    />
                    {email ? (
                        <Text style={styles.infoText}>{email}</Text>
                    ) : (
                        <Text style={styles.infoText}>user@gmail.com</Text>
                    )}
                </View>
                <View style={styles.infoBox}>
                    <Feather
                        name="lock"
                        size={15}
                        color="#2F344B"
                        style={styles.infoIcon}
                    />
                    <Text style={styles.infoText}>********************</Text>
                </View>
            </View>

            <View style={styles.optionsBlock}>
                <Text style={styles.headerText}>Opções</Text>
                <TouchableOpacity
                    onPress={() => {
                        console.log('editar')
                    }}
                    style={styles.optionsButton}
                >
                    <View style={styles.optionsIconDiv}>
                        <Feather
                            name="edit"
                            size={15}
                            color="white"
                            style={styles.optionsIcon}
                        />
                    </View>
                    <Text style={styles.optionsText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleLogout}
                    style={styles.optionsButton}
                >
                    <View style={styles.optionsIconDiv}>
                        <Feather
                            name="log-out"
                            size={15}
                            color="white"
                            style={styles.optionsIcon}
                        />
                    </View>
                    <Text style={styles.optionsText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
