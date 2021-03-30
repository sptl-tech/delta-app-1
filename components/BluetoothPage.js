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
                <Text>{'\n'}</Text>

  
            <View style={styles.buttons}>
                <View style = {styles.clearButton}>
                    <Button color = 'gray' title = "Clear board" />
                </View>
                <View style = {styles.changeButton}>
                    <Button color = 'gray' title = "Change display" />
                </View>
                
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
        flex: 2,
        flexDirection:'row',
        backgroundColor: 'black',
        justifyContent: 'space-between',
    },
    changeButton: {
        flex:1,
        marginLeft: 5
    },
    clearButton: {
        flex: 1, 
        marginRight:5
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
