import React from 'react';
import { connect } from 'react-redux';

class AddContainer extends React.Component {
    render() {
        return (
            <div className="addcounter">
                <h4>Container</h4>
                    <button onClick={()=> this.props.dispatch({type: 'ADD_COUNTER'})}>Add Container</button>
                    <button onClick={()=> this.props.dispatch({type: 'CLEAR_COUNTER'})}>Clear Container</button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return{...state};
}

export default connect(mapStateToProps)(AddContainer);