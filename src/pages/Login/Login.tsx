import { View, Text, TextInput, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

const Login = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })


  return (
    <SafeAreaView style={styles.login}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Login</Text>
          <Text style={styles.headerSubText}>Acesse suas movimentações e organize suas finanças</Text>
        </View>
        <View>
          <LinearGradient
            colors={['#647AFF', '#8355E6']}
            style={styles.headerDetail}>
          </LinearGradient> 
        </View>
      </View>
      <View>
        <TextInput placeholder='user@example.com' style={styles.input} />
        <TextInput placeholder='******************' style={styles.input} />
        <Pressable style={styles.button} onPress={() => {console.log('Login efetuado com sucesso.')}}>
          <LinearGradient
            colors={['#647AFF', '#8355E6']}
            style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </LinearGradient> 
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#32364D',
  },

  text: {
    fontFamily: 'Nunito_400Regular',
    color: 'white',
  },

  header: {
    paddingBottom: 33,
    paddingTop: 60,
    paddingRight: 112,

    marginLeft: 37,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 36,

    color: 'white',
  },

  headerSubText: {
    fontSize: 8,

    color: 'white',

    lineHeight: 10.9,
  },

  headerDetail: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomLeftRadius: 125.5,
    borderColor: 'transparent',

    width: 138,
    height: 129,

    alignSelf: 'flex-end',
  },

  input: {
    display: 'flex',

    marginHorizontal: 37, 
    backgroundColor: '#434965',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    borderColor: 'transparent',

    paddingLeft: 31,
    paddingTop: 19,
    paddingBottom: 14,
    marginBottom: 30,

    color: 'white',
  },

  button: {
    alignItems: 'center',

    width: 146,
    height: 54,

    borderRadius: 15,

    paddingVertical: 19,
    
    marginLeft: 26,
    marginTop: -13,
  },

  buttonText: {
    fontFamily: 'Nunito_700Bold',

    color: 'white',
  },
});

export default Login;