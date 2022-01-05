import React from "react";
import { View, Image, Text, StyleSheet, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';

import Logo from "./component/Logo";
import FuncComp from "./component/FuncComp";
import { StylesMain } from "../styles/style";

const styles = StyleSheet.create({
    
})

const SignIn = () =>{
    
    return (
        <View style={StylesMain.container}>
            <ImageBackground source={require('./../../assets/image/background/map_1.png')} resizeMode="cover" style={StylesMain.container}>
                <View>
                    <Logo />
                    <FuncComp />
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignIn;