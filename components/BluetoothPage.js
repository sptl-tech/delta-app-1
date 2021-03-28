import React from 'react';
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
    
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
