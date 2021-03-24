import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header() {

  const openMenu = () =>{
    //implement 
  }
   
  return (
    <View style = {styles.header}>
      <MaterialIcons name = 'menu' size = {28} onPress = {openMenu} style = {styles.icon} />
    
    <View>
       <Text style = {styles.headerText}>TT Led</Text>
    </View>
    </View>
    
    
  )}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    position: 'absolute',
    height: 69,
    left: 0,
    right: 0,
    top: 45,
    backgroundColor: 'maroon',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30, 
    color: 'white',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})