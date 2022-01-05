import React from "react";
import {Animated, View, TouchableOpacity, Text, ImageBackground} from 'react-native';
import {StylesMain} from "../../styles/style";

const Background = () => {
    return(
        <View style={StylesMain.container}>
            <ImageBackground source={require('./../../../assets/image/background/map_2.png')} resizeMode='cover' style={StylesMain.container} />
        </View>
    )
}

export default Background;