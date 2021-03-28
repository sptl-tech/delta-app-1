import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavScreen from '../components/Navigation';
import Home from '../components/Home';
import Bluetooth from '../components/BluetoothPage';
import Timer from '../components/Timer';

const Stack = createStackNavigator(); 

export default function HomeStack (){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "Home" component={Home} 
            options = {{
                title: '',

                headerStyle: {
                    backgroundColor: '#303030'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center',
          },
            }}
            />
            <Stack.Screen name = "NavScreen" component={NavScreen} 
            options = {{
                title: 'Navigation',
                headerStyle: {
                    backgroundColor: '#303030',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center',
                
          },
            }}/>
            <Stack.Screen name = "Bluetooth" component={Bluetooth} 
            options = {{
                title: 'Bluetooth',
                headerStyle: {
                    backgroundColor: '#303030'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center',
          },
            }}/>
            <Stack.Screen name = "Timer" component={Timer} 
            options = {{
                title: 'Timer',
                headerStyle: {
                    backgroundColor: '#303030'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center',
          },
            }}/>
        </Stack.Navigator>
        </NavigationContainer>
    ) 
        
    }
