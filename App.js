/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
 import { createStore } from "redux";
 import { Provider } from "react-redux";
 import reducer from "./screen/store/reducer";
 import StarterIntro from './screen/StartIntro/Start';
 import SignIn from './screen/SignIn';
 import SignUp from './screen/SignUp';
 import BottomTab from "./screen/BottomButton/BottomTab";
 import QRScan from "./screen/QRcodeScanner/QRScan/QRScan";
 import AddQR from "./screen/QRcodeScanner/TabScreen/CustomerScreen/AddQR";
 import QRGenerator from "./screen/QRcodeScanner/TabScreen/RetailScreen/QRGenerator";
 import ProductList from "./screen/QRcodeScanner/TabScreen/RetailScreen/ProductList";
 // import MapMain from './screen/MapMain';
 // import QRCodeScreen from "./screen/QRcodeScanner";
 
 const Stack = createNativeStackNavigator();

 const store = createStore(reducer);
 const App = () => {
   return (
       <Provider store={store}>
           <SafeAreaProvider>
               <NavigationContainer>
                   <Stack.Navigator screenOptions={{headerShown: false,}}>
                       <Stack.Screen name='Start intro' component={StarterIntro}/>
                       <Stack.Screen name='SignIn' component={SignIn} />
                       <Stack.Screen name='SignUp' component={SignUp} />
                       <Stack.Screen name='MainScene' component={BottomTab} />
                       <Stack.Screen name='QRScan' component={QRScan} initialParams={{type:'default'}}/>
                       <Stack.Screen name='AddQR' component={AddQR} initialParams={{type:'default', data:false, user: false}}/>
                       <Stack.Screen name='QRGen' component={QRGenerator} />
                       <Stack.Screen name='ProductList' component={ProductList} />
                       {/*<Stack.Screen name='QRCodeScreen' component={QRCodeScreen} />*/}
                   </Stack.Navigator>
               </NavigationContainer>
           </SafeAreaProvider>
       </Provider>
   );
 };
 
 export default App;
 