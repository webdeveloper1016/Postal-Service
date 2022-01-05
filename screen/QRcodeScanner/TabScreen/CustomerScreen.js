import React from "react";
import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {DataTable} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import {StylesMain} from "../../styles/style";
import Icons from "react-native-vector-icons/FontAwesome";
import MapVIewMain from "../component/MapVIewMain";
import {TextInput} from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const CustomerScreen = () => {
    const navigation = useNavigation();
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    return(
        <View style={StylesMain.container}>
            <ImageBackground source={require('./../../../assets/image/background/map_2.png')} resizeMode='cover' style={StylesMain.container}>
                    <View style={styles.container}>
                        <View style={styles.searchView}>
                            <TextInput theme={theme} mode={'outlined'} placeholder={"Product Search"} left={<TextInput.Icon theme={theme} name={"database-search"} />} />
                        </View>
                        <View style={styles.productListView}>
                            <DataTable style={styles.productData}>
                                 <DataTable.Header>
                                     <DataTable.Title>Fast Shipping</DataTable.Title>
                                     <DataTable.Title numeric>Product</DataTable.Title>
                                     <DataTable.Title numeric>Amount</DataTable.Title>
                                 </DataTable.Header>
                                 <ScrollView>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>6.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} >Y</Icons> <Icons name={'close'} color={'red'}> N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} >Y</Icons> <Icons name={'close'} color={'red'}> N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'}>Y</Icons> <Icons name={'close'} color={'red'}> N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.Row>
                                        <DataTable.Cell><Icons name={'check'} color={'blue'}>Y</Icons> <Icons name={'close'} > N</Icons></DataTable.Cell>
                                        <DataTable.Cell numeric>Choco</DataTable.Cell>
                                        <DataTable.Cell numeric>8.0</DataTable.Cell>
                                    </DataTable.Row>
                                 </ScrollView>
                            </DataTable>
                        </View>
                        <View style={styles.userMap}>
                            <MapVIewMain />
                        </View>
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor: "#000000a0",
        borderRadius:10,
    },
    searchView: {
        height:'7%',
        paddingLeft: "10%",
        paddingRight: '10%'
    },
    productListView: {
        height:'50%',
        paddingTop:40
    },
    productData: {
        backgroundColor: '#fffffff0',
        borderRadius: 10,
        height: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
    },
    userMap: {
        marginTop: 20,
        height: '43%',
        marginLeft:20,
        marginRight:20,
    }
})

const theme = { colors: {
        placeholder: 'white', text: 'white', primary: '#fff',
        underlineColor: 'white', background: 'transparent', borderColor: '#fff',
    }}

export default CustomerScreen;