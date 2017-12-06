import React, { Component } from 'react';
import TodoForm from './component/TodoForm';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
      todo_empty: '',
      todos: [],
      details: {}
    }


    handleChange(prop, e) {
    console.log(prop)
    this.setState({ [prop]: e.target.value })
    }


    handleSave(e) {
    var obj = {
      id : this.state.details.id,
      todos : this.state.todo_empty
    }
      this.setState ({
        todos : this.state.todos.concat(obj),
        todo_empty : ''
      })
    }


          render() {
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2 className="App-title">TODOS</h2>
                </header>
                <TodoForm 
                      handleChange={this.handleChange.bind(this,'todo_empty')}
                      handleSave={this.handleSave.bind(this)}
                      {...this.state}
                    />
              </div>
            );
          }
        }

export default App;
