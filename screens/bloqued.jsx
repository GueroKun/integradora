import { View, StyleSheet, TextInput, SectionList, TouchableOpacity } from "react-native";
import { Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';

const Bloqued = () => {

    const activarUsuario = () => {
        Alert.alert(
          'Activar usuario',
          '¿Está seguro que quiere activar a este usuario?',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancelar presionado'),
              style: 'cancel',
            },
            { text: 'Aceptar'},
          ],
          { cancelable: false }
        );
      };

    const usuarios = [
        { names: 'Ana Jiménez López', correo: '20223tn096@utez.edu.mx' },
        { names: 'Pedro Ruiz Martín', correo: '20223tn097@utez.edu.mx' },
        { names: 'Laura Pérez Rodríguez', correo: '20223tn098@utez.edu.mx' },
        { names: 'Sofía García Fernández', correo: '20223tn099@utez.edu.mx' }
    ];

    const [usuario, setUsuario] = useState(usuarios);
    const firstTenUsuarios = usuarios.slice(0, 9);
    return (
        <View style={styles.container}>
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 8 }}>
                    <Feather name="search" size={16} color="black" style={{ padding: 2 }} />
                    <View style={{ flex: 1 }}>
                        <TextInput placeholder="Buscar usuarios" style={{ color: 'black', fontSize: 18, marginLeft: 5, width: '100%' }}></TextInput>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ width: '35%', fontWeight: 'bold', }}>Nombre</Text>
                    <Text style={{ width: '25%', fontWeight: 'bold', }}>Correo</Text>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Acciones</Text>
                </View>
            </View>
            <SectionList
                sections={[{ title: "Posts", data: firstTenUsuarios }]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => {

                    return (
                        <View style={{ padding: 6 }}>
                            <View style={styles.cardPost}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: '35%', margin: 4 }}>
                                        <Text style={styles.texto}>{item.names}</Text>
                                    </View>
                                    <View style={{ width: '30%', margin: 4 }}>
                                        <Text style={styles.texto}>{item.correo}</Text>
                                    </View>
                                    <View style={{ margin: 4 }}>
                                        <View style={{ borderRadius: 50, width: 24, height: 24, backgroundColor: 'red' }}></View>
                                    </View>
                                    <View style={{ margin: 4 }}>
                                        <TouchableOpacity style={styles.button} onPress={activarUsuario}>
                                            <Text style={styles.buttonText}>Activar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            <StatusBar barStyle="light-content" backgroundColor="blue" />
        </View>
    )
}

export default Bloqued;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9EBF8',
    },
    texto: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    cardPost: {
        backgroundColor: "#4682B4",
        width: 'auto',
        height: 'auto',
        margin: 1,
        flex: 1,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#002F5D',
        padding: 8,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})