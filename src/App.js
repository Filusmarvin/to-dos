import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './Main';
import Footer from './Footer'
/* eslint-disable */
// characterCount is working
// empty input bar


class App extends Component {

  constructor () {
    super();
    this.state = {
      todos: [],
      completed:"",
      show : false,
    }
  }

  addTodo (words){
    let newTodo = {task:words, complete: false }
    let newTodosArray = this.state.todos.concat(newTodo)
    this.setState({
      todos:newTodosArray
    })
  }

destroyArray(index){
  this.state.todos.splice(index,1);
  this.forceUpdate();
}



toggle(todos){
  todos.complete = !todos.complete;
  this.forceUpdate()
}

/* everything to do with the footer*/
  characterCount () {
    if(this.state.todos.length === 0){
      return "0"
    } else{
      return this.state.todos.length
    }
  }



toggleDiv () {
  if( this.state.todos.length < 0){
    this.setState( { show : false})
  }
  else {
    this.setState({ show : true})
  }
}

  render() {
    return (
      <section className="todoapp">
        <Header sendWordsToApp={this.addTodo.bind(this)} toggleDiv={ this.toggleDiv.bind(this) } />

        <Main todos={this.state.todos} destroy={this.destroyArray.bind(this)} toggle={this.toggle.bind(this)}   />

          { this.state.show && <Footer count={this.characterCount()} />}
      </section>

    );
  }
}


export default App;
