import { StyleSheet } from 'react-native'

const StylesMain = StyleSheet.create({
    container: {
        flex: 1
    },
    cssCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const LogoSize = StyleSheet.create({
    sign: {
        height:'70%'
    },
    signText: {
        textAlign:'center', 
        fontSize: 25,
        color: 'white',
    },
    logoBelowText: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginRight: 10, 
        marginLeft: 10
    },
    textLine:{
        flex: 1, 
        height: 1,
        backgroundColor: 'white', 
        marginRight: 10,
        marginLeft: 10
    },
    rectangle: {
        backgroundColor: "black",
        height: '40%',
        width: '80%',
        opacity: .6,
    },
    input: {
        width: '100%',
        margin: 12,
        borderWidth: 1,
    }
})

export { StylesMain, LogoSize }
