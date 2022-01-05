const initalState = {
    message: 'hahahahahhah',
    icon:"icon",
    buttonItem: 'nothing',
    navAddress: '',
    region: {
        latitude: 28.394857,
        longitude: 84.124008,
        latitudeDelta: 2,
        longitudeDelta: 1.5,
    }
}

const reducer = (state=initalState, action) => {
    const newState = {...state};
    if(action.type === 'qrcode'){
        newState.navAddress = action.payload;
    }else if('regionLocation'){

    }
    return newState
}

export default reducer;