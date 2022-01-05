import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    logo: {
        height: '30%'
    },
    logoText: {
        alignSelf: "center",
        color: '#ffffff',
        fontSize: 30,
    },
    image: {
        flex: 1,
    },
    containLogo:{
        flex:1,
        alignItems: 'center',
        justifyContent: "center"
    }
})

function StarterIntro() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./../../assets/image/background/map_1.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.containLogo} onTouchStart={() => {
                    navigation.navigate("SignIn");
                }}>
                    <Image source={require('./../../assets/image/Logo.png')} resizeMode="contain" style={styles.logo}/>

                    <Progress.CircleSnail color={['white']} style={{marginTop:30 }}/>
                </View>
            </ImageBackground>
      </View>
    )
}

export default StarterIntro
