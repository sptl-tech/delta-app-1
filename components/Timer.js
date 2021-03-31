import React from 'react';
import { StyleSheet, Text, View, Image, Button,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        Hours : 0, 
        Minutes : 0,
        Seconds: 0   }
        this.decrementHours = this.decrementHours.bind(this);
        this.decrementMinutes = this.decrementMinutes.bind(this);
        this.decrementSeconds = this.decrementSeconds.bind(this);
        this.incrementHours = this.incrementHours.bind(this);
        this.incrementMinutes = this.incrementMinutes.bind(this);
        this.incrementSeconds = this.incrementSeconds.bind(this);
    }
    decrementHours(){
        if(this.state.Hours>0)
        this.setState({Hours: this.state.Hours -1});
        if(this.state.Hours ==0)
        this.setState({Hours: 24})
    }
    decrementMinutes(){
        if(this.state.Minutes>0)
        this.setState({Minutes: this.state.Minutes -1});
        if(this.state.Minutes ==0)
        this.setState({Minutes: 59})
    }
    decrementSeconds(){
         if(this.state.Seconds>0)
        this.setState({Seconds: this.state.Seconds -1});
        if(this.state.Seconds ==0)
        this.setState({Seconds: 59})
    }
    incrementHours(){
        if(this.state.Hours < 24)
        this.setState({Hours: this.state.Hours +1});
        if(this.state.Hours ==24)
        this.setState({Hours: 0});
    }
    incrementMinutes(){
        if(this.state.Minutes < 59)
        this.setState({Minutes: this.state.Minutes +1});
        if(this.state.Minutes == 59)
        this.setState({Minutes: 0});
    }
    incrementSeconds(){
        if(this.state.Seconds < 59)
        this.setState({Seconds: this.state.Seconds +1});
        if(this.state.Seconds == 59)
        this.setState({Seconds: 0});
    }
    render(){
        return(
            <KeyboardAvoidingView
             style={styles.rowContainer}
             behavior = "padding">
             <Button onPress = {this.decrementHours} color = "red" title = "-" />
             <Text style = {styles.numberText}> {this.state.Hours} Hour</Text>
             <Button onPress = {this.incrementHours} color = "red" title = "+" />
             <Button onPress = {this.decrementMinutes} color = "red" title = "-" />
             <Text style = {styles.numberText}> {this.state.Minutes} Min</Text>
             <Button onPress = {this.incrementMinutes} color = "red" title = "+" />
             <Button onPress = {this.decrementSeconds} color = "red" title = "-" />
             <Text style = {styles.numberText}> {this.state.Seconds} Sec</Text>
             <Button onPress = {this.incrementSeconds} color = "red" title = "+" fontWeight = "bold" />
              <TouchableOpacity style={styles.roundButton1}>
             <Text>STOP</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.roundButton2}>
             <Text>START</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        ) 
    
}}

const styles = StyleSheet.create({
    roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  roundButton2: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'green',
  },
    rowContainer: {
      flexWrap: "wrap",
      flexDirection: "row",
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
     color: "white",
     margin: 3,
     fontSize: 20
    },
    buttons: {
        flex: 2,
        flexDirection:'row',
        backgroundColor: 'black',
        justifyContent: 'space-between',
    },
});
