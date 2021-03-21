import React from 'react';
import './component.css';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../images/tt_logo.png';
export default class Home extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.image} source = {logo} />
            <Text>{'\n'}</Text>
            <Text class= 'homepageText' >TT App</Text>
            <Text>{'\n'}</Text>
            <Button title = "Get Started" />
            </View>
        )
    
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    }

});
