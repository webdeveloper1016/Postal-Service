import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Avatar} from 'react-native-paper';

const UserBox = (props) => {
    return (
        <View style={styles.userBox}>
            <View style={styles.avatarImage}>
                <Avatar.Text size={50} label="NS"/>
            </View>
            <View style={styles.avatarText}>
                <Text style={{color: 'white'}}>Nikita Semenov</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: '10%',
        paddingRight: '10%',
        justifyContent: "space-between",
        alignItems: "center",
        margin: '5%',
        borderRadius: 20,
        backgroundColor: "rgba(158,0,0,0.4)"
    },
    avatarImage: {
        flex: 2,
        alignSelf: "center"
    },
    avatarText: {
        flex: 3
    }
})

export default UserBox;