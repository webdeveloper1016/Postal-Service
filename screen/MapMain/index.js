import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomMenu from '../BottomButton/BottomMenu';
import MainView from './Component/MainView';
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';


const MapMain = (props) => {
    return (
        <View style = {styles.contain}>
            <MainView />
        </View>
    )
}

const mapStateToProps = state => {
    return{
        navAddress: state.navAddress
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

export default MapMain;

const styles = StyleSheet.create({
    contain: {
        flex: 1
    }
})
