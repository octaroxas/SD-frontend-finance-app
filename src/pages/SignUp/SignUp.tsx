import { Fragment, useContext, useEffect, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles/styles';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext'


interface IFormSignUp {
    name: string;
    email: string;
    password: string;
    password_repeat: string
}
const HeaderSignUp = () => {
    return (
        <View>
            <Text style={styles.title}>
                Novo usuário
            </Text>
            <Text style={styles.subTitle}>
                Registre-se para conseguir controlar suas finanças e organizar seus gastos
            </Text>
        </View>
    )

}

const schemaValidation = yup.object({
    name: yup.string().min(6, 'Informe seu nome!').required('Informe seu nome!'),
    email: yup.string().email('E-mail inválido!').required('Informe um endereço de e-mail!'),
    password: yup.string().min(6, 'A senha deve contar com no mínimo 6 dígitos!').required('Informe a senha'),
    password_repeat: yup.string().oneOf([yup.ref('password'), null], 'As senhas informadas precisam ser iguais!').required('Repita a senha informada!'),
})

const SignUp = ({ navigation }: any) => {

    const EyeOpened = require('../../assets/opened-eye.png')
    const EyeClosed = require('../../assets/closed-eye.png')

    const { control, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            name: undefined,
            email: undefined,
            password: undefined,
            password_repeat: undefined
        },
        resolver: yupResolver(schemaValidation)
    })
    const [showPassword, setShowPassword] = useState(true)
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(true)
    const { handleSignUp } = useContext(AuthContext)


    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const toggleShowPasswordRepeat = () => {
        setShowPasswordRepeat(!showPasswordRepeat)
    }


    // const handleSignUp = async (form: any) => {
    //     console.log(form)

    //     const credentialsForm = {
    //         name: form.name,
    //         email: form.email,
    //         password: form.password
    //     }

    //     try {
    //         const { data } = await axios.post('https://finance.ianbrito.com.br/api/v1/register', credentialsForm)
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const signUp = async (userRegistrationData: any) => {
        try {
            handleSignUp({
                name: userRegistrationData.name,
                email: userRegistrationData.email,
                password: userRegistrationData.password
            })

            tologin()

        } catch (error) {
            console.log(error)
        }
    }

    const tologin = () => {
        navigation.navigate('login')
    }

    useEffect(() => {

    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={tologin}
                style={styles.backButtom}
            >
                <Feather
                    name="chevron-left"
                    color="white"
                    size={30}
                />
            </TouchableOpacity>
            <HeaderSignUp />

            <View style={styles.formContainer}>

                <Text style={styles.label}>
                    Nome
                </Text>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.inputText}
                            onChangeText={onChange}
                            value={value}
                            placeholder='João de Almeida'
                        />
                    )}
                />

                <Text style={styles.label}>
                    E-mail
                </Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.inputText}
                            onChangeText={onChange}
                            value={value}
                            placeholder='joaodasilva@gmail.com'
                        />
                    )}
                />

                <Text style={styles.label}>
                    Senha
                </Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.inputPasswordContainer}>
                            <TextInput
                                style={styles.inputPassword}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={showPassword}
                                placeholder='***************'
                            />
                            <TouchableOpacity onPress={toggleShowPassword}>
                                <Image
                                    style={styles.iconPasswordInput}
                                    source={showPassword ? EyeOpened : EyeClosed}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />

                <Text style={styles.label}>
                    Confirmar senha
                </Text>
                <Controller
                    control={control}
                    name="password_repeat"
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.inputPasswordContainer}>
                            <TextInput
                                placeholder='***************'
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={showPasswordRepeat}
                                style={styles.inputPassword}
                            />
                            <TouchableOpacity onPress={toggleShowPasswordRepeat}>
                                <Image
                                    style={styles.iconPasswordInput}
                                    source={showPasswordRepeat ? EyeOpened : EyeClosed}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                    }
                />
                <View style={styles.messagesContainer}>
                    {errors.name && <Text style={styles.errorMessage}><Feather style={styles.iconMessage} name='x-circle' /> {errors.name?.['message']}</Text>}

                    {errors.email && <Text style={styles.errorMessage}><Feather style={styles.iconMessage} name='x-circle' /> {errors.email?.['message']}</Text>}

                    {errors.password && <Text style={styles.errorMessage}><Feather style={styles.iconMessage} name='x-circle' /> {errors.password?.['message']}</Text>}

                    {errors.password_repeat && <Text style={styles.errorMessage}><Feather style={styles.iconMessage} name='x-circle' /> {errors.password_repeat?.['message']}</Text>}
                </View>

                <TouchableOpacity onPress={handleSubmit(signUp)}>
                    <LinearGradient
                        colors={['#5971FF', '#8355E5']}
                        style={styles.buttom}
                        start={{ x: 0.7, y: 0 }}

                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Criar conta
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLinks}>
                <Text style={styles.textRedirectLogin}>
                    Já possuo cadastro?
                </Text>
                <TouchableOpacity onPress={tologin}>
                    <Text style={styles.redirectLogin}>
                        Fazer login!
                    </Text>
                </TouchableOpacity>
            </View>

            <LinearGradient
                colors={['#8355E5', '#5971FF', '#5971FF']}
                style={styles.elementTR}
            />


            <LinearGradient
                colors={['#8355E5', '#5971FF', '#5971FF']}
                style={styles.elementBL}
            />

        </SafeAreaView >
    )
}

export default SignUp;