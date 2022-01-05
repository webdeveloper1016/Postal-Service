import React, {useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import MapView , {PROVIDER_GOOGLE, Callout} from "react-native-maps";
import {Midnight_Commander, Modest, blue} from "../../../MapMain/Component/mapStyle";
import {nepalRegionQRScreen} from "../../../MapSetting/RegionSetting";

const MapViewGen = ({childToParent}, props) => {
    const mapRef = React.createRef();
    const [coordinate, setCoordinate] = useState({
        latitude: nepalRegionQRScreen.latitude,
        longitude: nepalRegionQRScreen.longitude
    });

    const changeRegion = () => {
        // console.log(mapRef.current);
        mapRef.current.animateToRegion({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: nepalRegionQRScreen.latitudeDelta,
            longitudeDelta: nepalRegionQRScreen.longitudeDelta,
        })
    }
    return(
        <View>
            <View style={{position:"absolute", bottom: 60, right:10, zIndex: 1}}>
                <TouchableOpacity onPress={()=>changeRegion()}>
                    <Image source={require('./../../../../assets/image/mark.png')}
                           resizeMode={'contain'}
                           style={{width: 50, height: 50}}
                    />
                </TouchableOpacity>
            </View>
            <MapView
                ref = {mapRef}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                customMapStyle={Midnight_Commander}
                mapType={"hybrid"}
                userInterfaceStyle={"dark"}
                initialRegion={nepalRegionQRScreen}
            >
                <MapView.Marker
                    // coordinate={nepalRegionQRScreen}
                    coordinate={{
                        latitude: nepalRegionQRScreen.latitude,
                        longitude: nepalRegionQRScreen.longitude
                    }}
                    title={"Shop Place"}
                    onDrag={(e)=>{
                        setCoordinate(e.nativeEvent.coordinate);
                        childToParent(e.nativeEvent.coordinate)
                    }}
                    draggable
                >
                    <Image source={require('./../../../../assets/image/mark.png')} resizeMode={"contain"} style={{width:26, height: 26}} />
                </MapView.Marker>
            </MapView>
        </View>

    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        opacity: .9,
        borderStyle:"solid",
        borderColor:'red',
        borderWidth: 5
    },
})

export default MapViewGen