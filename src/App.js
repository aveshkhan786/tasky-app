import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
        Text:"",
        key:''
       }
    }
    this.handleInput =this.handleInput.bind(this);
    this.addItem =this.addItem.bind(this);
  }
  
  handleInput(e){
    this.setState({
      currentItem:{
        Text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem= this.state.currentItem;
    console.log(newItem);
    if(newItem.Text!==""){
      const newItems =[...this.state.items,newItem];
      items = newItems,
      currentItem: {
        Text ='',
         key=''
      }
    }
  }
  render() {
    return (
      <div className='App'>
      <header>
        <form id="to-do-form">
          <input type="text" placeholder='Enter Message !!' 
          value={this.state.currentItem.Text} 
          onChange={this.handleInput}
          
          
          />
          
          <button type='submit'>Add

          </button>
          
        </form>
      </header>
      </div>
    )
  }
}

export default App


