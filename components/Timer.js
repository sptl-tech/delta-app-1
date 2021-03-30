import React from 'react';
import { StyleSheet, Text, View, Image, Button,TextInput, KeyboardAvoidingView } from 'react-native';
export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        Hours : 0, 
        Minutes : 0,
        Seconds: 0   }
        this.incrementHours = this.incrementHours.bind(this);
    }

    incrementHours(){
        this.setState({Hours: this.state.Hours +1});
    }
    incrementMinutes(){
        this.setState({Minutes: this.state.Minutes +1});
    }
    incrementSeconds(){
        this.setState({Seconds: this.state.Seconds +1});
    }
    render(){
        return(
            <KeyboardAvoidingView
             style={styles.container}
             behavior = "padding">
            <Text style = {{ color: "white", margin: 45, fontSize: 50}}> {this.state.Hours} Hours</Text>
             <Button onPress = {this.incrementHours} color = "red" title = "Click me" />
            </KeyboardAvoidingView>
        ) 
    }
}

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
});
