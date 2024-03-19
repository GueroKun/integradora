import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native"
import { Card, Button } from '@rneui/themed';

const InfoUser = () => {
    const [image, setImage] = useState(require("../assets/honkai.jpg"));
    const [nombre, setNombre] = useState("Christian Brandon");
    const [apellidoP, setApellidoP] = useState("Castañeda");
    const [apellidoM, setApellidoM] = useState("López");
    const [curp, setCurp] = useState("CALC040919HMSSPAH2");
    const [correo, setCorreo] = useState("guerokun@gmail.com");
    const [rol, setRol] = useState("Admin");
    return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Card>
                            <Card.Title>{nombre} {apellidoP} {apellidoM}</Card.Title>
                            <Card.Divider />
                            <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                <Card.Image
                                    source={image}
                                    style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}
                                />
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Rol</Text>
                                <Text style={styles.inputText}> {rol} </Text> 
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Curp</Text>
                                <Text style={styles.inputText}> {curp} </Text> 
                            </View>
                            <View style={styles.marginInput}>
                                <Text style={styles.labelText}>Correo</Text>
                                <Text style={styles.inputText}> {correo} </Text> 
                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </View>
    )
}

export default InfoUser;

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
