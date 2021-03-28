import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../images/tt_logo.png';
import Header from './layout/Header'

export default function Home ({navigation}) {

        return(
            <View style={styles.container}>
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
    button: {
        position: 'absolute',
        top: 100,
    }

});
