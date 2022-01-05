import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { StylesMain, LogoSize } from "../../styles/style";

const Logo = () => {
    const [text, changeText] = React.useState('');

    return (
        <View style={styles.logoContain}>
            <Image source={require('./../../../assets/image/Logo.png')} resizeMode='contain' style={LogoSize.sign}/>
            <View style={LogoSize.logoBelowText}>
                <View style={LogoSize.textLine} />
                <View>
                    <Text style={{fontSize:22, color: 'white'}}> Sign Up </Text>
                </View>
                <View style={LogoSize.textLine} />
            </View>
        </View>
    )
}

export default Logo;

const styles = StyleSheet.create({
    logoContain: {
        justifyContent: "flex-end",
        alignItems: 'center',
        height:vh(30)
    }
})