import React from 'react';
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
            <Button color = "#8B0000" title = "Get Started" />
            </View>
        )
}}

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