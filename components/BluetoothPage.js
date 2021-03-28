import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image, Button,TextInput, KeyboardAvoidingView } from 'react-native';
import logo from '../images/tt_logo.png';
export default class BluetoothPage extends React.Component {
    render(){
        return(
            <KeyboardAvoidingView
             style={styles.container}
             behavior = "padding">
                <Text style = {styles.base}>
                    Enter a word:
                </Text>
                <TextInput 
                    style ={styles.input}
                    placeholder = 'e.g. Hello'
                    placeholderTextColor = 'white'
                />
            <View style={styles.buttons}>
                <Button color = 'white' title = "Change display" />
                <Button color = 'white' title = "Clear board" />
            </View>
            </KeyboardAvoidingView>
        ) 
    
=======
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../images/tt_logo.png';
import Header from './layout/Header'
export default class Home extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Image style={styles.image} source = {logo} />
            <Text>{'\n'}</Text>
            <Text style={styles.TTLED}>Bluetooth</Text>
            <Text>{'\n'}</Text>
            <Button color = "red" title = "Get Started" />
            </View>
        )
>>>>>>> upstream/main
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
<<<<<<< HEAD
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
        flexDirection:'row',
        backgroundColor: '#dc143c',
        
        
    },
    input:{
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 8,
        margin: 10,
        width: 200,
        color: '#ffffff'
        

    },
    base:{
        marginTop: 450,
        color: 'white'
    }
   

});
=======
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    TTLED: {
        color: "white",
        fontSize: 70,
        fontFamily: "Times New Roman",
    },
    openMotto: {
        color: "white",
        padding: 70,
        fontFamily: "Georgia"
    }

});
>>>>>>> upstream/main
