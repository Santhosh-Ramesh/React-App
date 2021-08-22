import React from 'react';
import './App.css';
import List from './List'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem:{
        text: '',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key:  Date.now(),
      completed: false
    }
  })
}

addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  if (newItem.text !=="") {
    const newItems = [...this.state.items,newItem];
    this.setState({
      items: newItems,
      currentItem:{
        text: '',
        key:'',
        completed: false
      }
    })
  }
}

deleteItem(key){
  const filteredItems = this.state.items.filter(item=> item.key!==key);
  this.setState({
    items: filteredItems
  })
}

onUpdate(text,key){
  const items = this.state.items;
  items.map(item=>{
    if (item.key ===key) {
      item.text = text;
    }
  })
  this.setState({
    items: items
  })
}

onComplete(checked,key,completed){
  const items = this.state.items;
  items.map(item=>{
    if (item.key ===key) {
      item.completed = checked;
    }
  })
  this.setState({
    items:items
  })
}

render(){
  return(
    <div className="App">
      <header>
      <form id="to-do-form">
      <input 
      type="text"
      placeholder="Enter your todo"
      onChange={this.handleInput}
      value={this.state.currentItem.text}
      />
      <button type="submit" onClick={this.addItem}>Add</button>
      </form>
      </header>
      <List items={this.state.items} deleteItem={this.deleteItem} onUpdate={this.onUpdate} onComplete={this.onComplete}/>
    </div>
  );
}

 
}


