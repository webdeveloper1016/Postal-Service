import React from "react";
import {StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {DataTable, Text} from "react-native-paper";
import Icons from "react-native-vector-icons/FontAwesome";

const optionsPerPage = [2, 3, 4];
const DataTableComp = (props) => {
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <ScrollView>
        <DataTable style={{backgroundColor: 'rgba(1,47,109,0.69)'}}>
            <DataTable.Header>
                <DataTable.Title style={{flex: 1}}><Text style={{color:'white'}}>Road</Text></DataTable.Title>
                <DataTable.Title style={{flex: 1.5}}><Text style={{color:'white'}}>Package</Text></DataTable.Title>
                <DataTable.Title style={{flex: 1}}><Text style={{color:'white'}}>Radius</Text></DataTable.Title>
                <DataTable.Title style={{flex: 1}}><Text style={{color:'white'}}>Earn</Text></DataTable.Title>
                <DataTable.Title style={{flex: 1}}><Text style={{color:'white'}}>print</Text></DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>1</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1.5}}><Text style={{color:'white'}}>50Kg Rice</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>5 Km</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>$20</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>
                    <TouchableOpacity onPress={()=>console.log("fds")}>
                        <Icons name={'print'} color={'white'} size={20} />
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>1</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1.5}}><Text style={{color:'white'}}>50Kg Rice</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>5 Km</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>$20</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>
                    <TouchableOpacity onPress={()=>console.log("fds")}>
                        <Icons name={'print'} color={'white'} size={20} />
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>1</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1.5}}><Text style={{color:'white'}}>50Kg Rice</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>5 Km</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>$20</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>
                    <TouchableOpacity onPress={()=>console.log("fds")}>
                        <Icons name={'print'} color={'white'} size={20} />
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>1</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1.5}}><Text style={{color:'white'}}>50Kg Rice</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>5 Km</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>$20</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>
                    <TouchableOpacity onPress={()=>console.log("fds")}>
                        <Icons name={'print'} color={'white'} size={20} />
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>1</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1.5}}><Text style={{color:'white'}}>50Kg Rice</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>5 Km</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>$20</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>
                    <TouchableOpacity onPress={()=>console.log("fds")}>
                        <Icons name={'print'} color={'white'} size={20} />
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>1</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1.5}}><Text style={{color:'white'}}>50Kg Rice</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>5 Km</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}><Text style={{color:'white'}}>$20</Text></DataTable.Cell>
                <DataTable.Cell style={{flex:1}}>
                    <TouchableOpacity onPress={()=>console.log("fds")}>
                        <Icons name={'print'} color={'white'} size={20} />
                    </TouchableOpacity>
                </DataTable.Cell>
            </DataTable.Row>
        </DataTable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
       flex:1
    }
})

const theme= {
    colors: {
        placeholder: 'white', text: 'white', primary: 'white',
        underlineColor: 'transparent', background: '#003489'
    }
}

export default DataTableComp;