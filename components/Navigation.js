import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './layout/Header'

export default function NavScreen ({navigation}) {

        return(
            <View style={styles.container}>
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
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },

});
