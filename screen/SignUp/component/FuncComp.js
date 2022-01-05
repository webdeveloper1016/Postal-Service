import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { TextInput, Button, DarkTheme } from 'react-native-paper';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import RoundButton from "./RoundButton";

const FuncComp = () => {
    const iconsName = ['google', 'facebook', 'linkedin', 'phone'];
    const iconsColor = ['#ff1100', '#3b5998', '#0033ff', '#cccc00'];
    const navigation = useNavigation();
    return (
        <View style = {styles.rectangle}>
            <ScrollView>
                <View>
                    <Text style={styles.textSet}>Already have an account?
                        <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('SignIn')}> Sign In! </Text>
                    </Text>
                    <TextInput label={'User Name'} style={styles.textPlace} theme={theme} underlineColor={'#fff'}/>
                    <TextInput label={'Email'} style={styles.textPlace} theme={theme} underlineColor={'#fff'}/>
                    <TextInput label={'Password'} style={styles.textPlace} secureTextEntry theme={theme} underlineColor={'#fff'}/>
                    <TextInput label={'Password'} style={styles.textPlace} secureTextEntry theme={theme} underlineColor={'#fff'}/>
                </View>
                <View>
                    <Button style={styles.signButton}  mode="contained" onPress={() => navigation.navigate("SignIn")} > Sign Up </Button>
                </View>
                <View style={styles.lineSpace}>
                    {iconsName.map((iconsName, i) =>
                        <RoundButton name={iconsName} key={iconsName} size={20} bgColor={iconsColor[i]}/>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default FuncComp

const styles = StyleSheet.create({
    rectangle: {
        top: 20,
        height: vh(60),
        marginRight: '10%',
        marginLeft: '10%',
        padding: 20,
        backgroundColor: '#00000099',
        // opacity: .6
    },

    textPlace: {
        marginTop:10,
        width: "100%",  
    },

    signButton: {
        marginTop: 30,
        backgroundColor: '#1c4525',
        opacity: 1,
    },

    textSet: {
        color: '#fff',
        textAlign: 'center'
    },

    lineSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20
    }
})

const theme = { colors: {
    placeholder: 'white', text: 'white', primary: '#fff',
    underlineColor: 'transparent', background: 'transparent', borderColor: '#fff',
}}

