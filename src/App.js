import React, { Component } from 'react';

import TodoForm from './component/TodoForm';

import './App.css';

class App extends Component {

  state = {
      todo: '',
      tasks: [],
      details: {},
      ids: 1,
      complete: '',
      active: 0,
      filter: 'ALL'
    }


    handleChange(prop, e) {
    console.log(prop)
    this.setState({ [prop]: e.target.value })
    }


    handleSave(e) {
    var obj = {
      tasks : this.state.todo,
      ids : this.state.ids,
      complete : false,
      active : this.state.active + 1
    }
      this.setState ({
        input: '',
        tasks : this.state.tasks.concat(obj),
        todo : '',
        ids : this.state.ids + 1,
        active : this.state.active + 1
      })
    }

    handleRemove(data){

      let tasks = this.state.tasks.filter((task) => {
        console.log(task.ids !== data.ids, task.ids,data)
        return task.ids !== data.ids
      })

      console.log('new',tasks)
      this.setState({
        active: tasks.length - 1,
        tasks
      })
    }


    handleComplete(index){

      var newList = this.state.tasks.map(todo => {
        const isSelected = todo.ids  === index.ids
        console.log(todo.ids, index.ids)
          if(isSelected) todo.complete = !todo.complete 
          return todo
      })

      var count = this.state.tasks.reduce(function(prev, next){
         let addAmount = next.complete ? 1 : 0
           prev += addAmount
           return prev
      },0)

      var active = this.state.tasks

      console.log("count:",count, active)
      console.log(index)

        this.setState({
          count:this.state.count,
          active:this.state.tasks.length - count
        })


      } 

      updateFilter(filter) {
          this.setState({
              filter
          });
      }
    
  render() {
    console.log(this.state.tasks)

    return (
      <div className="App">
        <header className="App-header" />
        <TodoForm className="todoForm"
              handleChange={this.handleChange.bind(this,'todo')}
              handleRemove = {this.handleRemove.bind(this)}
              handleComplete = {this.handleComplete.bind(this)}
              handleSave={this.handleSave.bind(this)}
              updateFilter={this.updateFilter.bind(this)}
              {...this.state}
            />
      </div>
    );
  }
}


export default App;
