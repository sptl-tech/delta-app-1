import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../images/tt_logo.png';
import Header from './layout/Header'

export default function Home ({navigation}) {

        return(
            <View style={styles.container}>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.TTLED}>Timeer</Text>
            <Text>{'\n'}</Text>
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
    openMotto: {
        color: "white",
        padding: 70,
        fontFamily: "Georgia"
    }

});