import { View, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Modal, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function MainPage() {

    const navigation = useNavigation()

    const [Firstname, setFirstname] = useState('')
    const [Secondname, setSecondname] = useState('')
    const [DateBirth, setDateBirth] = useState()
    const [Occupation, setOccupation] = useState('')
    const [Company, setCompany] = useState('')
    const [Age, setAge] = useState()


    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const toggleDatePicker = () => {
        setShow(!show)
    }
    const onChange = async ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate)
            if (Platform.OS === 'android') {
                toggleDatePicker()
                setDateBirth(currentDate.toDateString())
                const currentDate1 = new Date();
                const birthDate = new Date(currentDate.toDateString());
                let age = (currentDate1.getFullYear() - birthDate.getFullYear());
                const month = currentDate1.getMonth() - birthDate.getMonth();
                if (month < 0 || (month === 0 && currentDate1.getDate() < birthDate.getDate())) {
                    age--;
                }
                setAge(age)
            }
        }
        else {
            toggleDatePicker();
        }

    }
    function Upload() {
        axios.post("http://192.168.255.253:4000/details", { Firstname, Secondname, DateBirth, Occupation, Company }).then((res) => {
            if (res.data.message === "Details Send") {
                // console.log(Age)
                navigation.navigate('Display', { Firstname, Secondname, Age, Occupation, Company })
            }
        })

    }
    return (

        <View >
            <View
                style={{
                    backgroundColor: '#000000',
                    height: 150,
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    justifyContent: 'flex-end'
                }}>
                <Image
                    source={require('../assets/display.png')}
                    style={{
                        width: '50%',
                        height: '60%',
                        alignSelf: 'center',
                    }} />
            </View>
            <View style={{
                backgroundColor: '#ffffff',
                marginTop: 10
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        alignSelf: 'center',
                        width: '90%', color: '#666'
                    }}>First Name</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#989898',
                        width: '90%',
                        alignSelf: 'center',
                        paddingLeft: 10,
                        fontSize: 18,
                        fontWeight: '400',
                        padding: 10,
                        marginBottom: 10,
                        color: '#444'
                    }}
                    placeholder='First_Name'
                    placeholderTextColor={'#c8c9c8'}
                    onChangeText={(e) => { setFirstname(e) }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        alignSelf: 'center',
                        width: '90%', color: '#666'
                    }}>Second Name</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#989898',
                        width: '90%',
                        alignSelf: 'center',
                        paddingLeft: 10,
                        fontSize: 18,
                        fontWeight: '400',
                        padding: 10,
                        marginBottom: 10,
                        color: '#444'
                    }}
                    placeholder='Second Name'
                    placeholderTextColor={'#c8c9c8'}
                    onChangeText={(e) => { setSecondname(e) }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        alignSelf: 'center',
                        width: '90%', color: '#666'
                    }}>Date of Birth</Text>

                {
                    show && (
                        <DateTimePicker
                            mode='date'
                            value={date}
                            onChange={onChange}
                        />
                    )
                }
                {
                    !show && (
                        <Pressable
                            onPress={toggleDatePicker}>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: '#989898',
                                    width: '90%',
                                    alignSelf: 'center',
                                    paddingLeft: 10,
                                    fontSize: 18,
                                    fontWeight: '400',
                                    color: 'black',
                                    padding: 10,
                                    marginBottom: 10,
                                    color: '#444'
                                }}
                                placeholder='Date of Birth'
                                placeholderTextColor={'#c8c9c8'}
                                value={date.toLocaleDateString()}
                                onChangeText={(e) => { setDateBirth(e) }}
                                editable={false}
                            /></Pressable>
                    )
                }

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        alignSelf: 'center',
                        width: '90%',
                        color: '#666'
                    }}>Occupation</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#989898',
                        width: '90%',
                        alignSelf: 'center',
                        paddingLeft: 10,
                        fontSize: 18,
                        fontWeight: '400',
                        padding: 10,
                        marginBottom: 10,
                        color: '#444'
                    }}
                    placeholder='Occupation'
                    placeholderTextColor={'#c8c9c8'}
                    onChangeText={(e) => { setOccupation(e) }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        alignSelf: 'center',
                        width: '90%',
                        color: '#666'
                    }}>Company</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#989898',
                        width: '90%',
                        alignSelf: 'center',
                        paddingLeft: 10,
                        fontSize: 18,
                        fontWeight: '400',
                        padding: 10,
                        marginBottom: 10,
                        color: '#444'
                    }}
                    placeholder='Company'
                    placeholderTextColor={'#c8c9c8'}
                    onChangeText={(e) => { setCompany(e) }}
                />

            </View>
            <View style={{
                marginTop: 20
            }}>
                <TouchableOpacity>
                    <Text style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#ffffff',
                        alignSelf: 'center',
                        backgroundColor: '#21de7f',
                        width: '50%',
                        textAlign: 'center',
                        fontWeight: '400',
                        fontSize: 20,
                        color: '#555',
                        padding: 13
                    }}
                        onPress={Upload}>
                        Captured Details</Text></TouchableOpacity>
            </View>

        </View>


    )
}
