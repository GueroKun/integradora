import { View, StyleSheet, Modal, TextInput, SectionList, Pressable, TouchableOpacity, Alert, Button } from "react-native";
import { Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';


const HomeAdmin = () => {

    const usuarios = [
        { names: 'Christian Brandon Castañeda Lopez', correo: '20223tn087@utez.edu.mx' },
        { names: 'María Fernanda Gómez', correo: '20223tn092@utez.edu.mx' },
        { names: 'Javier Rodríguez Pérez', correo: '20223tn093@utez.edu.mx' },
        { names: 'Luisa Martínez Sánchez', correo: '20223tn094@utez.edu.mx' },
        { names: 'Carlos González García', correo: '20223tn095@utez.edu.mx' },
        { names: 'Ana Jiménez López', correo: '20223tn096@utez.edu.mx' },
        { names: 'Pedro Ruiz Martín', correo: '20223tn097@utez.edu.mx' },
        { names: 'Laura Pérez Rodríguez', correo: '20223tn098@utez.edu.mx' },
        { names: 'Sofía García Fernández', correo: '20223tn099@utez.edu.mx' }
    ];

    const [modalVisible, setModalVisible] = useState(false);

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
                                                <View style={{marginLeft: 25, marginRight: 25}}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Editar usuario</Text>
                                                </View>
                                                <View style={{ flex: 1}}>
                                                <Button onPress={() => setModalVisible(!modalVisible)} title="Guardar" />
                                                </View>
                                            </View>
                                            <View style={{ width: '100%' }}>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Nombre</Text>
                                                    <TextInput style={styles.inputText} />
                                                </View>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Apellido paterno</Text>
                                                    <TextInput style={styles.inputText} />
                                                </View>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Apellido materno</Text>
                                                    <TextInput style={styles.inputText} />
                                                </View>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Curp</Text>
                                                    <TextInput maxLength={18} style={styles.inputText} />
                                                </View>
                                                <View style={styles.marginInput}>
                                                    <Text style={styles.labelText}>Correo</Text>
                                                    <TextInput keyboardType="email-address" style={styles.inputText} />
                                                </View>
                                                <View style={styles.marginInput}> 
                                <Text style={styles.labelText}>Contraseña</Text>
                                <TextInput secureTextEntry={true} style={styles.inputText} />
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
                                    <View style={{ width: '35%', margin: 4 }}>
                                        <Text style={styles.texto}>{item.names}</Text>
                                    </View>
                                    <View style={{ width: '30%', margin: 4 }}>
                                        <Text style={styles.texto}>{item.correo}</Text>
                                    </View>
                                    <View style={{ margin: 4 }}>
                                        <View style={{ borderRadius: 50, width: 24, height: 24, backgroundColor: '#04CD04' }}></View>
                                    </View>
                                    <View style={{ margin: 4 }}>
                                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
                                            <Text style={styles.buttonText}>Editar</Text>
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
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonCerrar: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
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




export default HomeAdmin;