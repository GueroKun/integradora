import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeAdmin from "./homeAdmin";
import CuentaAdmin from "./cuentaAdmin";
import { TouchableOpacity } from "react-native";
import Bloqued from "./bloqued";
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import SolicitudContra from "./solicitudContra";
import EditarColor from "./editColor";

const Tab = createBottomTabNavigator();
const BottomNav = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const reDocente = () => {
        navigation.navigate('RegistrarDocente');
        setModalVisible(!modalVisible);
    }

    const reEstudiante = () => {
        navigation.navigate('RegistrarEstudiante');
        setModalVisible(!modalVisible);
    }
    return (
        <>
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
                            <Text style={{ fontWeight: 'bold' }}>Registrar</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={reDocente}>
                                    <View>
                                        <LottieView source={require('../assets/teacherAnimation.json')}
                                            autoPlay={true}
                                            loop={true}
                                            style={styles.loadingAnimation} />
                                        <Text style={styles.TextCard}>Docente</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={reEstudiante}>
                                    <View>
                                        <LottieView source={require('../assets/studentAnimation.json')}
                                            autoPlay={true}
                                            loop={true}
                                            style={styles.loadingAnimation} />
                                        <Text style={styles.TextCard}>Estudiante</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


            <Tab.Navigator
                initialRouteName="homeAdmin"
                screenOptions={{
                    tabBarActiveTintColor: '#cdb380',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#033649',
                    },

                }}>
                <Tab.Screen name="homeAdmin" component={HomeAdmin} options={{
                    tabBarShowLabel: true,
                    headerShown: true,
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#031634',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    tabBarLabelStyle: { fontSize: 10 },
                    tabBarLabel: 'Inicio',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => setModalVisible(true)} >
                            <Ionicons name="person-add" size={22} color="white" style={{ marginRight: 15 }} />
                        </TouchableOpacity>

                    ),
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: 5 }}>
                            <MaterialIcons name="home" size={28} color={color} />
                        </View>
                    ),
                }}
                />


                <Tab.Screen name="SolicitudContra" component={SolicitudContra} options={{
                    tabBarShowLabel: true,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#031634',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    tabBarLabelStyle: { fontSize: 10 },
                    title: 'Solicitudes cambio de contraseña',
                    tabBarLabel: 'Solicitud',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: 5 }}>
                            <MaterialCommunityIcons name="list-status" size={28} color={color} />
                        </View>
                    ),
                }}
                />


<Tab.Screen name="Bloqued" component={Bloqued} options={{
                    tabBarShowLabel: true,
                    headerShown: true,
                    title: 'Usuarios bloqueados',
                    headerStyle: {
                        backgroundColor: '#031634',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    tabBarLabelStyle: { fontSize: 10 },
                    tabBarLabel: 'Bloqueos',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: 5 }}>
                            <MaterialIcons name="block" size={28} color={color} />
                        </View>
                    ),
                }}
                />


                <Tab.Screen name="EditarColor" component={EditarColor} options={{
                    tabBarShowLabel: true,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#031634',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    tabBarLabelStyle: { fontSize: 10 },
                    title: 'Editar color',
                    tabBarLabel: 'Editar color',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: 5 }}>
                            <MaterialIcons name="color-lens" size={28} color={color} />
                        </View>
                    ),
                }}
                />



                <Tab.Screen name="cuentaAdmin" component={CuentaAdmin} options={{
                    tabBarShowLabel: true,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#031634',
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    tabBarLabelStyle: { fontSize: 10 },
                    title: 'Mi cuenta',
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: 5 }}>
                            <MaterialIcons name="account-circle" size={28} color={color} />
                        </View>
                    ),
                }}
                />


            </Tab.Navigator>
        </>


    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        margin: 20,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
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
    }
});

export default BottomNav;