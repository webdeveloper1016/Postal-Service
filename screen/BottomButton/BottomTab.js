import React, {useState} from "react";
// import {BottomNavigation, Text} from "react-native-paper";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";
import MapMain from "../MapMain";
import QRCodeScreen from "../QRcodeScanner";
import UserAccount from "../UserAccount"
import HomeAddress from "../HomeAddress";
import Calculation from "../Calculation";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    // const [index, setIndex] = useState(2);
    // const [routes] = React.useState([
    //     {key:'address', title:'Address', icon:'shield-home', color: '#000'},
    //     {key:'account', title:'Account', icon:'contacts', color: '#000'},
    //     {key:'map', title:'Map', icon:'map-marker', color: '#000'},
    //     {key:'calculation', title:'Calculation', icon:'map', color: '#000'},
    //     {key:'qrCode', title:'QR Kirana', icon:'qrcode', color: '#000'},
    // ]);
    // const renderScene = BottomNavigation.SceneMap({
    //     address: HomeAddress,
    //     account: UserAccount,
    //     map : MapMain,
    //     calculation: Calculation,
    //     qrCode : QRCodeScreen
    // })
    return (
        // <BottomNavigation
        //     navigationState={{ index, routes }}
        //     onIndexChange={setIndex}
        //     renderScene={renderScene}
        // />
        <Tab.Navigator
            initialRouteName="Map"
            activeColor="#fff"
            barStyle={{ backgroundColor: 'black' }}
        >
            <Tab.Screen
                name="Address"
                component={HomeAddress}
                options={{
                    tabBarLabel: 'My Account',
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 26, height: 26 }}
                            source={require('./../../assets/icon/account.png') }/>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={UserAccount}
                options={{
                    tabBarLabel: 'New Address',
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 26, height: 26 }}
                            source={require('./../../assets/icon/new-business-address.png') }/>
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapMain}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 26, height: 26 }}
                            source={require('./../../assets/icon/location-generator.png') }/>
                    ),
                }}
            />
            <Tab.Screen
                name="Calculation"
                component={Calculation}
                options={{
                    tabBarLabel: 'Calculation',
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 26, height: 26 }}
                            source={require('./../../assets/icon/ride-calculator.png') }/>
                    ),
                }}
            />
            <Tab.Screen
                name="QR Kirana"
                component={QRCodeScreen}
                options={{
                    tabBarLabel: 'QR Kirana',
                    tabBarIcon: ({ color }) => (
                        <Image
                            style={{ width: 26, height: 26 }}
                            source={require('./../../assets/icon/qr-scanner.png') }/>
                    ),
                }}
            />
        </Tab.Navigator>

    );
}


export default BottomTab