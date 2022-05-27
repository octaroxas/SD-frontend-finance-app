import { useEffect } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles/styles';
import { useForm } from 'react-hook-form';

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

const SignUp = () => {

    const { register, handleSubmit } = useForm()

    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <Feather
                    style={styles.backButtom}
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
                <TextInput
                    style={styles.inputText}
                    placeholder='João de Almeida'
                />

                <Text style={styles.label}>
                    E-mail
                </Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='joaodasilva@gmail.com'
                />

                <Text style={styles.label}>
                    Senha
                </Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='***************'
                />

                <Text style={styles.label}>
                    Confirmar senha
                </Text>
                <TextInput
                    placeholder='***************'
                    style={styles.inputText}
                />

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#8355E5', '#5971FF']}
                        style={styles.buttom}
                    >
                        <Text style={{ color: 'white' }}>
                            Cadastrar usuário
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLinks}>
                <Text style={styles.textRedirectLogin}>
                    Já possuo cadastro?
                </Text>
                <TouchableOpacity>
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