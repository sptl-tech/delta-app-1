import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../images/tt_logo.png';
import Header from './layout/Header'

export default function Home ({navigation}) {

        return(
            <View style={styles.container}>
                <Image style={styles.image} source = {logo} />
            <View style={{ borderBottomColor: '#FFFFFF', borderBottomWidth: 2, width: '100%' }} />
            <Button color = "red" title = "LED Display" onPress = {() => navigation.navigate('Bluetooth')}/>
            <View style={{ borderBottomColor: '#FFFFFF', borderBottomWidth: 2, width: '100%' }} />
            <Button color = "red" title = "Timer" onPress = {() => navigation.navigate('Timer')}/>
            <View style={{ borderBottomColor: '#FFFFFF', borderBottomWidth: 2, width: '100%' }} />
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
        position: 'absolute',
        top: 50,
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },

});
