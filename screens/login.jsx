import { useNavigation } from '@react-navigation/native';
import { Card, Image, Button, Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';


const Login = () => {
    const navigation = useNavigation();
  
    const [userName, setUserName] = useState('');
    const [pass, setUserPassword] = useState('');
  
    const validUser = {
      user: 'xd',
      password: '123'
    };
  
    let intentos = 0;
  
    const validateUser = () => {
      if (intentos > 3) {
        Alert.alert('Demasiados intentos', `Usuario bloqueado por 30 minutos`, [
          {
            text: 'Ok'
          }
        ]);
      } else {
        if (userName === validUser.user && pass === validUser.password) {
          navigation.replace('BottomTav');
        } else {
          Alert.alert('Usuario incorrecto', `Tienes ${3 - intentos} intentos restantes `, [
            {
              text: 'Ok',
              onPress: () => {
                intentos++;
              }
            }
          ]);
        }
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#002e5f', width: '92%', height: 'auto', borderRadius: 50, marginRight: 18, marginLeft: 18}}>
         <Text style={{textAlign: 'center', fontSize: 20, margin: 10, color: 'white' }}>SIDE</Text>
        </View>
        <View style={{width: '100%', marginRight: 18, marginLeft: 18}}>
        <Card containerStyle={{width: 'auto'}}>
          <Card.Title>Iniciar sesión</Card.Title>
          <Card.Divider />
          <View style={{margin: 10}}>
          <View style={{marginBottom: 10}}>
          <Text style={styles.labelText}>Usuario</Text>
          <TextInput value={userName} onChangeText={setUserName}  placeholder="Usuario" style={styles.inputText} />
          </View>
          <View>
          <Text style={styles.labelText}>Contraseña</Text>
          <TextInput value={pass} onChangeText={setUserPassword} placeholder="Contraseña" style={styles.inputText} />
          </View>
          <Text style={{padding: 15, textAlign: 'center'}}>¿Olvidaste tu contraseña?</Text>
          <View>
          <Button title='Iniciar sesión' color={'#002e5f'} onPress={validateUser} buttonStyle={{borderRadius: 15}}/>
          </View>
          </View>
        </Card>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D9EBF8',
    },
    labelText: {
      marginBottom: 5,
       fontSize: 12,
        fontWeight: 'bold'
    },
    inputText: {
      borderWidth: 1,
       borderColor: '#D9D9D9',
        borderRadius: 10,
         padding: 10
    }
    });
    

  export default Login;