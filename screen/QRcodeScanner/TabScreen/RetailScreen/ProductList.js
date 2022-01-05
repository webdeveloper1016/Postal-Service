import React, {useState} from "react";
import {View, ImageBackground, Text, ScrollView} from "react-native";
import {Provider, DataTable} from "react-native-paper";
import database from "@react-native-firebase/database";
import {StylesMain} from "../../../styles/style";

const optionsPerPage = [2, 3, 4];
const ProductList = () => {
    const [data, setData] = useState('');
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    React.useEffect(
        ()=>{
            database()
                .ref('/products')
                .once('value')
                .then(productData => setData(productData.val()));
                // .then(productData => console.log(productData));
                // Object.keys(data).map((key, value) => {
                //     console.log(key + '     ' + data[key]['product']['cost']);
                // })
        }
    )
    return (
        <Provider>
            <View style={StylesMain.container}>
                <ImageBackground
                    source={require('./../../../../assets/image/background/map_1.png')} resizeMode='cover'
                    style={StylesMain.container}
                >
                    <View style={styles.container}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>PRODUCT LIST</Text>
                        </View>
                        <View style={styles.main}>
                            <DataTable style={{backgroundColor:'white'}}>
                                <DataTable.Header>
                                    <DataTable.Title>Product</DataTable.Title>
                                    <DataTable.Title numeric>Cost</DataTable.Title>
                                    <DataTable.Title numeric>Quantity</DataTable.Title>
                                </DataTable.Header>
                                <ScrollView>
                                    {Object.keys(data).map((key) => {
                                        return(
                                            <DataTable.Row key={key.toString()}>
                                                <DataTable.Cell>{data[key]['product']['product']}</DataTable.Cell>
                                                <DataTable.Cell numeric>{data[key]['product']['cost']}</DataTable.Cell>
                                                <DataTable.Cell numeric>{data[key]['product']['quantity']}</DataTable.Cell>
                                            </DataTable.Row>
                                        )
                                    })}
                                </ScrollView>
                            </DataTable>
                        </View>
                        <View style={styles.buttComp}>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Provider>
    )
}

const styles = {
    container: {
        flex: 1
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 5,
        padding: 20
    },
    buttComp: {
        flex: 1,
    },
    titleText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        top: '15%',
    }
}

export default ProductList;