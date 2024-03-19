import { View, StyleSheet, TextInput, SectionList, TouchableOpacity, Modal, Button } from "react-native";
import { Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SolicitudContra = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const aceptarSoli = () => {
        Alert.alert(
            'Aceptar solicitud',
            '¿Está seguro que quiere aceptar esta solicitud?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelar presionado'),
                    style: 'cancel',
                },
                { 
                    text: 'Aceptar', 
                    onPress: () => setModalVisible(true)
                }
            ],
            { cancelable: false }
        );
    };
    

      const rechazarSoli = () => {
        Alert.alert(
          'Recharzar solicitud',
          '¿Está seguro que quiere rechazar esta solicitud?',
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
            <View style={{marginTop: 20}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ width: '40%', fontWeight: 'bold', }}>Nombre</Text>
                    <Text style={{ width: '30%', fontWeight: 'bold', }}>Correo</Text>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Acciones</Text>
                </View>
            </View>
            <SectionList
                sections={[{ title: "Posts", data: firstTenUsuarios }]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => {

                    return (
                        
                        <View style={{ padding: 6 }}>
                              <View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert('Modal has been closed.');
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                                <View style={{ flex: 1}}>
                                                <Button onPress={() => setModalVisible(!modalVisible)} title="Cancelar" />
                                                </View>
                                                <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Cambiar contraseña</Text>
                                                </View>
                                                <View style={{ flex: 1}}>
                                                <Button onPress={() => setModalVisible(!modalVisible)} title="Guardar" />
                                                </View>
                                            </View>
                                            <View style={{ width: '100%' }}>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Nueva contraseña</Text>
                                                    <TextInput style={styles.inputText} />
                                                </View>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Confirmar nueva contraseña</Text>
                                                    <TextInput style={styles.inputText} />
                                                </View>
                                            </View>
                                            
                                            <View style={{ marginTop: 15 }}>

                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={styles.cardPost}>
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: '40%', margin: 4 }}>
                                        <Text style={styles.texto}>{item.names}</Text>
                                    </View>
                                    <View style={{ width: '30%', margin: 4 }}>
                                        <Text style={styles.texto}>{item.correo}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginLeft: 8, marginRight: 8}}>
                                    <TouchableOpacity onPress={rechazarSoli}>
                                        <MaterialIcons name="close" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'center', marginLeft: 8, marginRight: 8}}>
                                        <TouchableOpacity onPress={aceptarSoli}>
                                        <MaterialIcons name="check" size={24} color="black" />
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

export default SolicitudContra;

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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    loadingAnimation: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        margin: 5,
    },
    TextCard: {
        textAlign: 'center'
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
    },
    marginInput: {
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})