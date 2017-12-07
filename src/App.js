import React, { Component } from 'react';

import TodoForm from './component/TodoForm';

import header from './img/list.png';
import './App.css';

class App extends Component {

  state = {
      todo: '',
      todos: [],
      details: {},
      ids: 1,
      status: 'Active',
      active: 0
    }


    handleChange(prop, e) {
    console.log(prop)
    this.setState({ [prop]: e.target.value })
    }


    handleSave(e) {
    var obj = {
      todos : this.state.todo,
      ids : this.state.ids,
      status : this.state.status,
      active : this.state.active + 1
    }
      this.setState ({
        input: '',
        todos : this.state.todos.concat(obj),
        todo : '',
        ids : this.state.ids + 1,
        active : this.state.active + 1
      })
    }

    handleRemove(task, i){
      var remove = {
        active : this.state.active,
        id : this.state.details.id,
      }
      this.setState({
        active: this.state.active - 1
      })
      let todos = this.state.todos.slice();
      todos.splice(i,1);
      this.setState({
        todos
      });
    }


    handleComplete(e){
      var complete = {
        active : this.state.active
    }
      this.setState ({
        active : this.state.active - 1
      })
    }
          render() {

            return (
              <div className="App">
                <header className="App-header" />
                <TodoForm className="todoForm"
                      handleChange={this.handleChange.bind(this,'todo')}
                      handleRemove = {this.handleRemove.bind(this,'active')}
                      handleComplete = {this.handleComplete.bind(this,'active')}
                      handleSave={this.handleSave.bind(this)}
                      {...this.state}
                    />
              </div>
            );
          }
        }


export default App;
