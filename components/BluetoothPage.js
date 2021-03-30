import React from 'react';
import { StyleSheet, Text, View, Image, Button,TextInput, KeyboardAvoidingView } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import base64 from 'react-native-base64';

export default class BluetoothPage extends React.Component {
    constructor() {
        super()
        this.manager = new BleManager()
        this.state = {inputString: ''};
    }

    encode = () =>{
        const Buffer = require("buffer").Buffer;
        var encode = new Buffer(this.state.inputString).toString("base64");
    }
    
    componentWillMount() {
        console.log("Mounted")
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.scanAndConnect();
                subscription.remove();
            }
        }, true);
    }
    scanAndConnect() {
        this.manager.startDeviceScan(null, null, (error, device) => {
          console.log("Scanning...");
          console.log(device);
    
          if (error) {
            console.log(error.message);
            return;
          }

          
    
          if (device.name ===  'TT_arduino') {
            console.log("Connecting to LED Board");
            this.manager.stopDeviceScan();
    
            device.connect()
              .then((device) => {
                console.log("Discovering services and characteristics");
                return device.discoverAllServicesAndCharacteristics()
              })
              .then((device) => {
                console.log(device.id);
                device.writeCharacteristicWithResponseForService('12ab', '34cd', encodedName)
                  .then((characteristic) => {
                    console.log(characteristic.value);
                    return 
                  })
              })
              .catch((error) => {
                console.log('Error in Writing Data');
                console.log(error.message);
              })
           }
       })
    }

    render(){
        return(
            <KeyboardAvoidingView
             style={styles.container}
             behavior = "padding">
                <Text style = {styles.base}>
                    Enter a word:
                </Text>
                <TextInput 
                    style ={styles.input}
                    placeholder = 'e.g. Hello'
                    placeholderTextColor = 'white'
                />
                <Text>{'\n'}</Text>

  
            <View style={styles.buttons}>
                <View style = {styles.clearButton}>
                    <Button color = 'gray' title = "Clear board" />
                </View>
                <View style = {styles.changeButton}>
                    <Button color = 'gray' title = "Change display" onPress = {inputString => this.setState({inputString})}/>
                </View>
                <Button title = "check" onPress = {this.encode} />
                
            </View>
            </KeyboardAvoidingView>
        ) 
    
}}

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
    changeButton: {
        flex:1,
        marginLeft: 5
    },
    clearButton: {
        flex: 1, 
        marginRight:5
    },
   
    input:{
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 8,
        margin: 10,
        width: 200,
        color: '#ffffff'
        

    },
    base:{
        marginTop: 450,
        color: 'white'
    }
   

});
