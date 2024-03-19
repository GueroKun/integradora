import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Card, Button } from '@rneui/themed';

const RegistrarEstudiante = () => {
    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Card>
                            <Card.Title>Datos del estudiante</Card.Title>
                            <Card.Divider />
                            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                <Card.Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/727/727399.png' }}
                                    style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}
                                />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Nombre</Text>
                                <TextInput placeholder="Ejem: Christian" style={styles.inputText} />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Apellido paterno</Text>
                                <TextInput placeholder="Ejem: Castañeda" style={styles.inputText} />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Apellido materno</Text>
                                <TextInput placeholder="Ejem: Lopez" style={styles.inputText} />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Curp</Text>
                                <TextInput maxLength={18} placeholder="Ejem: SISEXXXXXXXXXXXXXX" style={styles.inputText} />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Matricula</Text>
                                <TextInput maxLength={10} placeholder="Ejem: 20223tn087" style={styles.inputText} />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Correo</Text>
                                <TextInput keyboardType="email-address" placeholder="Ejem: sise@utez.edu.mx" style={styles.inputText} />
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={styles.labelText}>Contraseña</Text>
                                <TextInput secureTextEntry={true} style={styles.inputText} />
                            </View>
                            <Button title="Guardar" color={'#002e5f'} buttonStyle={{ borderRadius: 15 }} />
                        </Card>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegistrarEstudiante;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    marginInput: {
        marginBottom: 10
    }
})
