import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Button, Image, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const CuentaAdminEdit = () => {

    const navigation = useNavigation();

    const guardarModifi = () => {
        navigation.navigate('cuentaAdmin')
    };

    const [image, setImage] = useState(require('../assets/honkai.jpg'));
    const [nombre, setNombre] = useState("");
    const [apellidoP, setApellidoP] = useState("");
    const [apellidoM, setApellidoM] = useState("");
    const [curp, setCurp] = useState("");   
    const [correo, setCorreo] = useState("");

  const onChangeName = (newName) => {
    setName(newName);
    
  };
  const onChangeLast = (newLast) => {
    setLastName(newLast);

  };
  const onChangeCurp = (newCurp) => {
    setCurp(newCurp);
  };

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            quality: 1, 
            allowsEditing: true,
            aspect: [3, 4],
            mediaTypes: ImagePicker.MediaTypeOptions.All
        } 
        );
        console.log(result);
    
        if (!result.canceled){
        setImage(result.assets[0])
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{ flexDirection: 'row', paddingTop: 8, justifyContent: 'center'}}>
               <View>
               <Image
                    style={styles.circulo}
                    source={image} 
                />
               </View>
               <View>
                <View style={styles.circulo}>
                    <TouchableOpacity onPress={selectImage}>
                    <View style={styles.circulo2}>
                     <AntDesign name="upload" size={24} color="white" backgroundColor="#3c3c3c" />
                    </View>
                    </TouchableOpacity>
                </View>
               </View>
            </View>
            <View style={{justifyContent: 'center', marginBottom: 15}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 14, color: 'black'}}>Editar foto</Text>
            </View>

            <View style={{width: '100%', height: 0.5, backgroundColor: 'black'}}></View>
            
            <View style={{padding: 10}}>
                <View style={{borderRadius: 10}}>
                    <View style={{ margin: 8}}>
                        <View>
                        <Text style={styles.texto}>Nombre: </Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 8 }}>
                        <TextInput style={styles.textInput} value={'Christian Brandon'} onChangeText={onChangeName}></TextInput>
                        </View>
                    </View>
                    <View style={{margin: 8}}>
                        <View style={{marginRight: 20}}>
                        <Text style={styles.texto}>Apellido paterno: </Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 8 }}>
                        <TextInput style={styles.textInput} value={'Castañeda'} onChangeText={onChangeLast}></TextInput>
                        
                        </View>
                    </View>
                    <View style={{margin: 8}}>
                        <View style={{marginRight: 20}}>
                        <Text style={styles.texto}>Apellido materno: </Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 8 }}>
                        <TextInput style={styles.textInput} value={'López'} onChangeText={onChangeLast}></TextInput>
                        
                        </View>
                    </View>
                    <View style={{margin: 8}}>
                        <View style={{marginRight: 20}}>
                        <Text style={styles.texto}>Curp: </Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 8 }}>
                        <TextInput style={styles.textInput} value={'CALC040919HMSSPHA2'} onChangeText={onChangeCurp}></TextInput>
                        </View>
                    </View>
                    <View style={{margin: 8}}>
                        <View style={{marginRight: 20}}>
                        <Text style={styles.texto}>Correo: </Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 8 }}>
                        <TextInput style={styles.textInput}  value="20223tn087@utez.edu.mx"></TextInput>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
            <Button title={'Actualizar'} color={'#002F5D'} buttonStyle={{borderRadius: 15}} onPress={guardarModifi} />
            </View>
            <StatusBar basStyle={"light-content"} backgroundColor="white" />    
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9EBF8',
    },
    circulo: {
        height: 90,
        width: 90,
        borderRadius: 100,
        margin : 13,
    },
    circulo2: {
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: '#3C3C3C',
        height: 90,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: '1%'
    },
    texto: {
        fontSize: 12,
        color: '#515151',
        fontWeight: 'bold',
        marginBottom: 3
    },
    textInput:{
       fontSize: 16,
        color: 'black',
       marginLeft: 5,
       paddingTop: 12,
       paddingBottom: 12
    },
    button: {
        backgroundColor: '#002F5D',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },


})

export default CuentaAdminEdit;