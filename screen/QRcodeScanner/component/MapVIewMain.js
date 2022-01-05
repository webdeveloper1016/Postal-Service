import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_GOOGLE, Callout} from "react-native-maps";
import {Midnight_Commander, Modest, blue} from "../../MapMain/Component/mapStyle";
import {nepalRegionQRScreen} from "../../MapSetting/RegionSetting";

const shopCoordinate = (e) => {

}
const MapVIewMain = () => {
    const [coordinate, setCoordinate] = useState()
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                customMapStyle={Midnight_Commander}
                mapType={"standard"}
                userInterfaceStyle={"dark"}
                initialRegion={nepalRegionQRScreen}
            >
                <MapView.Marker
                    coordinate={nepalRegionQRScreen}
                    title={"Shop Place"}
                    onDrag={(e) => console.log(e.nativeEvent.coordinate)}
                    draggable
                />
            </MapView>
        </View>

    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        opacity: .9,
        borderStyle: "solid",
        borderColor: 'red',
        borderWidth: 5
    },
})

export default MapVIewMain