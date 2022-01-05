import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import {connect} from "react-redux";
import { useNavigation } from '@react-navigation/native';

const BottomButton = (props) => {
    const navigation = useNavigation();
    return (
        <IconButton
            icon={props.icons}
            color={'white'}
            size={props.size}
            onPress={()=>navigation.navigate(props.address)}
        />
    )
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return{
        ButtonEvent: () => dispatch({
            type: "qrcode"
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomButton)

const styles = StyleSheet.create({
    iconOfBottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        textAlign: 'center',
        color: 'white',
    },
})


const theme = { colors: {
    placeholder: 'white', text: 'white', primary: '#000',
    underlineColor: 'transparent', background: 'transparent', borderColor: '#fff',
}}