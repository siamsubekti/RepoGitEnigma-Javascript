import React from 'react';
import './App.css';
import { Card, Grid, Input } from '@material-ui/core';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
    
  }
    
    handleChange(e) {
        
    let currentList = [];
        
    let newList = [];
        
    if (e.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
              
        const lc = item.toLowerCase();
                
        const filter = e.target.value.toLowerCase();
                
          return lc.includes(filter);
      });
    } else {
            
      newList = this.props.items;
    }
        
    this.setState({
      filtered: newList
    });
  }
    
    render() {
        return (
            <Grid>
                <Input type="text" className="input" onChange={this.handleChange} 
                placeholder="Search..." />
                    <Grid>
                        {this.state.filtered.map(item => (
                            <Card key={item} className="listinput">
                                {item} 
                                {/* &nbsp; */}
                                <span className="delete"
                                    onClick={() => this.props.delete(item)}
                                    />  
                            </Card>
                        ))}
                    </Grid>
                </Grid>
        )
    }
}

export default List;