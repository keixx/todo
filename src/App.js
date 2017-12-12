import React, { Component } from 'react';

import TodoForm from './component/TodoForm';

import './App.css';

class App extends Component {

  state = {
      todo: '',
      tasks: [],
      tasksCopy: [],
      details: {},
      ids: 1,
      complete: '',
      filter: ''
    }


    handleChange(prop, e) {
    console.log(prop)
    this.setState({ [prop]: e.target.value })
    }


    handleSave(e) {
    var obj = {
      tasks : this.state.todo,
      ids : this.state.ids,
      complete : false
    }
      this.setState ({
        input: '',
        tasks : this.state.tasks.concat(obj),
        tasksCopy : this.state.tasks.concat(obj),
        todo : '',
        ids : this.state.ids + 1
      })
    }

    handleRemove(data){

      let tasks = this.state.tasks.filter((task) => {
        console.log(task.ids !== data.ids, task.ids,data)
        return task.ids !== data.ids
      })

      console.log('new',tasks)
      this.setState({
        tasks,
        tasksCopy: tasks
      })
    }


    handleComplete(index){

      this.state.tasks.map(todo => {
        const isSelected = todo.ids  === index.ids
        console.log(todo.ids, index.ids)
          if(isSelected) todo.complete = !todo.complete 
          return todo
      })
      console.log(index)

        this.setState({
        })
      } 

      updateFilter(filter) {
        var { tasks, tasksCopy } = this.state
        if(filter !== 'ALL'){
          const val = filter === 'COMPLETE'
            tasks.filter((completeS) =>
              tasks = tasksCopy
        )}else{
          const val = filter === 'ACTIVE'
            tasks.filter((incompleteS) =>
             tasks = tasksCopy
        )}
        return tasks
             
          console.log("FilterTrue:", tasks)
        // const ALL = this.state.tasks.filter((alls) => alls === alls)
        //  console.log("FilterAll:", ALL)

        // const COMPLETE = this.state.tasks.filter((completes) => completes.complete === true)
        //  console.log("FilterTrue:", COMPLETE)

        // const ACTIVE = this.state.tasks.filter((actives) => actives.complete === false)
        //  console.log("FilterFalse:", ACTIVE)
          this.setState({
              tasks
          });
      }

  render() {

    console.log(this.state.tasks)

    var count = this.state.tasks.reduce(function(prev, next){
       if(next.complete){
         var val = Object.keys(prev).includes('complete') ? prev.complete : 0
         console.log(val)
         prev.complete = val+1
       }else{
         var val = Object.keys(prev).includes('incomplete') ? prev.incomplete : 0
         prev.incomplete = val+1
       }
       return prev
      },{complete:0, incomplete:0})

    return (
      <div className="App">
        <header className="App-header" />
        <TodoForm className="todoForm"
              count={count}
              handleChange={this.handleChange.bind(this,'todo')}
              handleRemove = {this.handleRemove.bind(this)}
              handleComplete = {this.handleComplete.bind(this)}
              handleSave={this.handleSave.bind(this)}
              updateFilter={this.updateFilter.bind(this)}
              {...this.state}

            />
      </div>
   //  <TodoFooter className="todoFooter" />
    );
  }
}


export default App;
