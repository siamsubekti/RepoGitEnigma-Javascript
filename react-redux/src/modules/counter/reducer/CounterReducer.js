
const defaultState = {
    number: [],
    
}


function CounterReducer(state = defaultState, action) {
    const { type, counterIndex} = action;

    switch (type) {
        case 'INCREMENT':
            return { ...state, number: state.number.map((value, index) => {
                if (index === counterIndex){
                    return value +1;
                } else {
                    return value;
                }
            }) };
        case 'DECREMENT':
            return { ...state, number: state.number.map((value, index)=> {
                if (index === counterIndex) {
                    return value -1;
                } else {
                    return value;
                }
            }) };
        case 'RESET':
                return{...state, number: state.number.filter((el,index) =>
                    if(el!==counterIndex){
                        
                    } }
        case 'ADD_COUNTER':
            return { ...state, number: state.number.concat([0]) };
        case 'CLEAR_COUNTER':
            return { ...state, number: [] }
        case 'DELETE_COUNTER':
                return{...state, number: state.number.filter((el,index) => index!==counterIndex)}                    
        default:
            return state;
    }
}

export default CounterReducer;