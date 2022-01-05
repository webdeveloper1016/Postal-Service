import React, {PureComponent, useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StylesMain } from "../styles/style";
import RetailShopScreen from "./TabScreen/RetailShopScreen";
import CustomerScreen from './TabScreen/CustomerScreen'
import DriverScreen from "./TabScreen/DriverScreen";
import {BottomNavigation} from "react-native-paper";


const Tab = createMaterialTopTabNavigator();
const QRCodeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: { backgroundColor: '#001f44'},
            tabBarLabelStyle: {color: '#ffffff'}}}>
            <Tab.Screen name="Retail Shop" component={RetailShopScreen}/>
            <Tab.Screen name="Driver" component={DriverScreen} />
            <Tab.Screen name="Customer" component={CustomerScreen}/>
        </Tab.Navigator>
    )
}

export default QRCodeScreen