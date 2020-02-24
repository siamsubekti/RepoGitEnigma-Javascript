import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import '../../style/style.css';

class Counter extends React.Component {
    render() {
        return (
            
            <Grid>
                {this.props.number.map((e,i)=> (
                <Grid className="Card">
                    <button className="x" onClick={()=> this.props.dispatch({type: 'DELETE_COUNTER', counterIndex:i})}>x</button>
                <h4 className="title">Counter</h4>
                <Grid className="controls">
                    
                    
                    <p className="counter">{e}</p>
                    <button className="decre" onClick={()=>this.props.dispatch({type: 'DECREMENT', counterIndex:i})}>-</button>
                    <button className="incre" onClick={()=> this.props.dispatch({type: 'INCREMENT', counterIndex:i})}>+</button>
                </Grid>
                <Button variant="contained" color="secondary" onClick={()=> this.props.dispatch({type:'RESET'})}>reset</Button>
                </Grid>
                ))}
            </Grid>
            
        )
    }
}

function mapStateToProps(state) {
    return{...state};
}

export default connect(mapStateToProps)(Counter);