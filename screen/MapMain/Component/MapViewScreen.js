import React, {useState} from 'react';
import MapView, { PROVIDER_GOOGLE, Callout , Marker, Geojson} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Text, Button } from 'react-native';
import {Midnight_Commander, Modest} from './mapStyle';
import { connect } from "react-redux";
import {nepalRegionFirstScreen} from "../../MapSetting/RegionSetting";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    // on the style sheet
    calloutView: {
        flexDirection: "row",
    },
    calloutSearch: {
        borderColor: "transparent",
    },
    regionDisplay: {
        position: 'absolute',
        width: '30%',
        height: 200,
        backgroundColor: '#00000099',
        top: 60,
        left:20
    },
    coordinateText: {
        color: 'white'
    },
    typeMap: {
        position:"absolute",
        width: '25%',
        height: 40,
        top:'10%',
        right:30
    }
});

const nepalRegion = {
    latitude: 28.45298,
    longitude: 84.153909,
    latitudeDelta: 13.35,
    longitudeDelta: 8.25,
}

const myPlace = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [30.45298, 84.153909],
            }
        }
    ]
};

const MapViewScreen = (props) => {
    const [RegionData, setRegionData] = useState(false);
    const [TypeImage, setTypeImage] = useState('standard');
    return(
    <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            customMapStyle={Modest}
            mapType={TypeImage}
            userInterfaceStyle={"dark"}
            initialRegion={nepalRegionFirstScreen}
            onRegionChange={e => setRegionData(e)}
        >
            <Geojson
                geojson={myPlace}
                strokeColor="red"
                fillColor="green"
                strokeWidth={2}
            />
            <Marker coordinate={nepalRegion} draggable/>
        </MapView>
        <View style={styles.regionDisplay}>
            <Text style={styles.coordinateText}>latitude: {RegionData['latitude']}</Text>
            <Text style={styles.coordinateText}>longitude: {RegionData['longitude']}</Text>
            <Text style={styles.coordinateText}>latitudeDelta: {RegionData['latitudeDelta']}</Text>
            <Text style={styles.coordinateText}>longitudeDelta: {RegionData['longitudeDelta']}</Text>
        </View>
        <View style={styles.typeMap}>
            <Button
                title={TypeImage}
                color="#ffffff50"
                onPress={() => setTypeImage(TypeImage !== 'standard' ? 'standard':'satellite')}
            />
        </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return{
      region: state.region
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        DisplayEvent: () => dispatch({
            type: 'regionLocation',
            payload: ''
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapViewScreen);