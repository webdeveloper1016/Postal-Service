import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StylesMain, LogoSize } from "../../styles/style";
import { vh, vw } from 'react-native-css-vh-vw';

const Logo = () => {
    const [text, changeText] = React.useState('fdsaffsd');

    return (
        <View style={styles.logoContain}>
            <Image source={require('./../../../assets/image/Logo.png')} resizeMode='contain' style={LogoSize.sign}/>
            <View style={LogoSize.logoBelowText}>
                <View style={LogoSize.textLine} />
                <View>
                    <Text style={LogoSize.signText}> Sign In </Text>
                </View>
                <View style={LogoSize.textLine} />
            </View>
        </View>
    )
}

export default Logo


const styles = StyleSheet.create({
    logoContain: {
        justifyContent: "flex-end",
        alignItems: 'center',
        height:vh(35)
    }
})
