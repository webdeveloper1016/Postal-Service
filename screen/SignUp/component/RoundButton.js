import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RoundButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.bgColor,
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:40,
            height:40,
            borderRadius:20,
        }}>
            <Icon name={props.name}  size={props.size} color="white" />
        </TouchableOpacity>
    )
}

export default RoundButton

const styles = StyleSheet.create({
    button: {
        
    }
})
