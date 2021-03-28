import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../images/tt_logo.png';
import Header from './layout/Header'

export default function Home ({navigation}) {

        return(
            <View style={styles.container}>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.TTLED}>Nav Screen Brah</Text>
            <Text>{'\n'}</Text>
            <Button style = {styles.button} color = "red" title = "Bluetooth" onPress = {() => navigation.navigate('Bluetooth')}/>
            <Text>{'\n'}</Text>
            <Button color = "red" title = "Timer" onPress = {() => navigation.navigate('Timer')}/>
            <Button style = {styles.button} color = "red" title = "LED Display" onPress = {() => navigation.navigate('Bluetooth')}/>
            <Button style = {styles.button} color = "red" title = "Timer" onPress = {() => navigation.navigate('Timer')}/>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    button: {
        borderBottomWidth: 10, 
        borderBottomColor: 'white'
    },
    openMotto: {
        color: "white",
        padding: 70,
        fontFamily: "Georgia"
    button: {
        position: 'absolute',
        top: 100,
    }

});