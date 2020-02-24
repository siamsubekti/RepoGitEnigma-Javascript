import React from 'react';
import './App.css';
import List from './List';
import { Input, Button, Grid, FormControl } from '@material-ui/core';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");


    if (newItem.value !== "") {
      list.push(newItem.value);
      this.setState({
        list: list
      });

      //ini untuk mereset form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      //jika input tidak memiliki value, maka harus di buat batas karena ini diperluakn
      newItem.classList.add("is-danger");
    }
  }

  removeItem(item) {
    const list = this.state.list.slice();
    list.some((el, i) => {
      if (el === item) {

        list.splice(i, 1);
        return true;
      }
    });

    this.setState({
      list: list
    });
  }

  render() {
    return (
      <Grid className="search-from">
        <Grid className="container">
          <section className="section">
            <List items={this.state.list} delete={this.removeItem} />
          </section>
          <hr />
          <section className="section">
            <Grid className="">
              <form className="form" id="addItemForm">
                <Input
                  type="text"
                  id="addInput"
                  placeholder="Insert Some Text.."
                />

              </form>
              
            </Grid>
            <Button onClick={this.addItem}>
                Add Item
              </Button>
          </section>
        </Grid>
      </Grid>
    );
  }
}

export default App;