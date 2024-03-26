/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Fhv from '../assest/login13.png';
const SignUpPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={Fhv}
                    style={styles.image}
                />
            </View>
            <View style={styles.formContainer}>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:'80%'}}>

                    <Text style={styles.dscffr}>Create New Account</Text>
                    <Text style={styles.dedaw}>Already Registered? Log in here.</Text>
                    </View>

                </View>
                <View style={styles.junrf}>

                    <View style={styles.mnjfr}>

                        <View style={styles.dvokiu}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                placeholder="Name"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.dvokiu}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.dvokiu}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="Password"
                                secureTextEntry={true}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.dvokiu}>
                            <Text style={styles.label}>Date Of Bearth</Text>
                            <TextInput
                                placeholder="Date of Birth"
                                style={styles.input}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    mnjfr: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
    },
    dscffr: {
        fontWeight: 'bold',
        fontSize: 40,
        // width: '80%',
        textAlign: 'center',
        color:'black'
    },
    label:{
color: 'black',
    },
    dvokiu: {
        width: '100%',
    },
    junrf: {
        width: '100%',
        display: 'flex',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dedaw: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        backgroundColor: 'black',

        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        position: 'relative',
        left: 170,
        top: -40,
    },
    formContainer: {
        flex: 1,
        backgroundColor: 'white',
        // borderTopLeftRadius: 10,
        borderTopRightRadius: 100,
        padding: 20,
    },
    input: {
        height: 40,
        // borderColor: '#D9D9D9',
        borderColor: '#cccccc',
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignUpPage;