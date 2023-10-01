import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
const RootStack = createNativeStackNavigator();

const Routers = () => {
    let stackList = []

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen name='Login' component={Login} />
                <RootStack.Screen name='Home' component={Home} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Routers