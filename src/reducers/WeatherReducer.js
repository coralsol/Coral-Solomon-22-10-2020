let initialState = {
    weather: [],
    degreesunits: '',
    name:''
}

export default function WeatherReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_WEATHEROFTHEWEEK':
            return { ...state, weather: action.forecast };
        case 'SET_UNITS':
            return { ...state, degreesunits: action.unit };
        case 'SET_NAME':
            return { ...state, name: action.name };
        default:
            return state;
    }
}