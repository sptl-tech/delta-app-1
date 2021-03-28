import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import logo from '../images/tt_logo.png';
import Header from './layout/Header'

export default function Home ({navigation}) {

        return(
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.TTLED}>Nav Screen</Text>
                <Text>{'\n'}</Text>
                <Button color = "#8B0000" title = "Bluetooth" onPress = {() => navigation.navigate('Bluetooth')}/>
                <Text>{'\n'}</Text>
                <Button color = "#8B0000" title = "Timer" onPress = {() => navigation.navigate('Timer')}/>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
    },
    TTLED: {
        color: "white",
        fontSize: 70,
        fontFamily: "Times New Roman",
    },
});