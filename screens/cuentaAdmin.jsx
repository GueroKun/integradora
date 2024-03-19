import { View, StyleSheet, Modal, Pressable, TextInput, TouchableOpacity } from "react-native";
import { Button, Image, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';

const CuentaAdmin = () => {
    const [name, setName] = useState( "Christian Brandon");
    const [lastname, setLastName] = useState("Castañeda Lopez");   

    const navigation = useNavigation();

    const consultar = () => {
        navigation.navigate('InfoUser');
    }
    
    const [image, setImage] = useState(require("../assets/honkai.jpg"));

    const [isPressed, setIsPressed] = useState(false);
    const [isPressedConsultar, setIsPressedConsultar] = useState(false);
    const [isPressedSesion, setIsPressedSesion] = useState(false);

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };
    const PressInConsultar = () => {
        setIsPressedConsultar(true);
    };
    
    const PressOutConsultar = () => {
        setIsPressedConsultar(false);
    };
    const PressInSesion = () => {
        setIsPressedSesion(true);
    };
    
    const PressOutSesion = () => {
        setIsPressedSesion(false);
    };
    
    const handlePress = () => {
        navigation.navigate('cuentaAdminEdit');
      };
      
      const confirmarCerrarSesion = () => {
        Alert.alert(
          'Cerrar Sesión',
          '¿Está seguro que quiere cerrar sesión?',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancelar presionado'),
              style: 'cancel',
            },
            { text: 'Aceptar', onPress: () => navigation.navigate('Login') },
          ],
          { cancelable: false }
        );
      };
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 10, paddingTop: 10}}>
                <Image
                    style={styles.circulo}
                    source={image}
                />
                <View style={{ flexDirection: 'row', flex: 1, marginRight: 10}}>
                    <View style={{justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'left',fontWeight: 'bold', color: 'black', fontSize: 20 }}>{lastname} {name}</Text>
                        <View style={{ backgroundColor: 'green', borderRadius: 15, borderWidth: 1, borderColor: 'black', width: '30%' }}>
                        <Text style={{ fontSize: 12, paddingHorizontal: 8, paddingVertical: 2, textAlign: 'center' }}>Admin</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={{ backgroundColor: '#4682B4', marginBottom: 5, borderRadius: 10, paddingBottom: 8}}>
                <View>
                    <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, padding: 5}}>
                    <Text style={{color: '#E9DEDE', fontWeight: 600, fontSize: 13 }}>Información personal</Text>
                    </View>
                    <TouchableOpacity
                    onPressIn={PressInConsultar}
                    onPressOut={PressOutConsultar}
                    activeOpacity={0.8}
                    onPress={consultar}
                    >
                        <View style={[isPressedConsultar && styles.pressed]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10}}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="information-circle-outline" size={25} color="white" style={{marginRight: 3}} />
                          <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>Consultar</Text>
                       </View>
                          <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
                    </View>
                        </View>
                        </TouchableOpacity>
                    <TouchableOpacity
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    onPress={handlePress}
                    activeOpacity={0.8}
                    >
                        <View style={[isPressed && styles.pressed]}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10}}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <MaterialCommunityIcons name="account-edit" size={25} color="white" style={{marginRight: 3}} />
                          <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>Editar</Text>
                       </View>
                          <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
                    </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: '#4682B4', borderRadius: 10, paddingBottom: 8 }}>
                <View>
                <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, padding: 5}}>
                    <Text style={{color: '#E9DEDE', fontWeight: 600, fontSize: 13 }}>Inicio de sesión</Text>
                    </View>
                    <TouchableOpacity
                    onPressIn={PressInSesion}
                    onPressOut={PressOutSesion}
                    activeOpacity={0.8}
                    onPress={confirmarCerrarSesion}
                    >
                        <View style={[isPressedSesion && styles.pressed]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="sign-out" size={25} color="white" style={{marginRight: 3}} />
                            <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>Desconectar</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
                    </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9EBF8',
    },
    circulo: {
        height: 80,
        width: 80,
        borderRadius: 100,
        margin : 10
    },
    texto: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,    
        backgroundColor: '#D9D9D9',
        height: 40,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15
    },
    pressed: {
        backgroundColor: '#031634', 
      }
})



export default CuentaAdmin;