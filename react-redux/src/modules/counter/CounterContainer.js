import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './reducer/CounterReducer';
import Counter from './Counter';
import AddContainer from './AddContainer';


class CounterContainer extends React.Component {
    render() {
        return (
            <Provider
            store={ createStore( CounterReducer )}>
                <AddContainer/>
                <Counter/>
                
            </Provider>
        )
    }
}

export default CounterContainer;