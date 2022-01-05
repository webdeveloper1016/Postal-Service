import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { faAddressBook, faHome, faLocationArrow, faMapMarkerAlt, faQrcode, faSearchLocation, faUser } from '@fortawesome/free-solid-svg-icons';
import BottomButton from './BottomButton';

const mainFunc = [
  'Your home address',
  'New address | Change address',
  'Location pin | Address generator',
  'Ride sharing logo',
  'Barcode for qr code'
];

const iconsName = ['shield-home', 'contacts', 'map-marker', 'map', 'qrcode'];

const BottomMenu = () => {
  const mainAddress = ['HomeAddress', 'NewChangeAddress', 'MapMain', 'RideShare', 'QRCodeScreen'];
  return (
    <View style={styles.mainContain}>
      {iconsName.map((iconsName, i) =>
        <BottomButton icons={iconsName} size={20} key={i} func={mainFunc[i]} address={mainAddress[i]}/>
      )}
    </View>
  )
}

export default BottomMenu;

const styles = StyleSheet.create({
  mainContain: {
    flex:1 ,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: '100%',
    backgroundColor: '#131a1eee',
    justifyContent: 'space-between',
    alignItems: "center"
  },

})
