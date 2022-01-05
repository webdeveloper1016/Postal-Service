import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, DarkTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RoundButton from './RoundButton';

const FuncComp = () => {
    const iconsName = ['google', 'facebook', 'linkedin', 'phone'];
    const iconsColor = ['#ff1100', '#3b5998', '#0033ff', '#cccc00'];
    const navigation = useNavigation();
    return (
        <View style = {styles.rectangle}>
            <Text style={styles.textSet}>Don't have an account? 
            <Text style={{fontWeight: 'bold'}} onPress={()=>navigation.navigate("SignUp")}> Sign Up! </Text>
            </Text>
            <TextInput label={'Email'} style={styles.textPlace} theme={theme} underlineColor={'#fff'}/>
            <TextInput label={'Password'} style={styles.textPlace} secureTextEntry theme={theme} underlineColor={'#fff'}/>
            <Button style={styles.signButton}  mode="contained" onPress={() => navigation.navigate("MainScene")} > Sign In </Button>
            <View style={styles.lineSpace}>
                {iconsName.map((iconsName, i) =>
                    <RoundButton name={iconsName} key={iconsName} size={20} bgColor={iconsColor[i]}/>
                )}
            </View>
        </View>
    )
}

export default FuncComp

const styles = StyleSheet.create({
    rectangle: {
        top: '5%',
        marginRight: '10%',
        marginLeft: '10%',
        padding: 20,
        backgroundColor: '#00000099',
    },

    textPlace: {
        marginTop:10,
        width: "100%",  
    },

    signButton: {
        marginTop: 30,
        backgroundColor: '#1c4525',
        opacity: 1
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