import React, { Component } from 'react';

import '../App.css';



class TodoForm extends Component {


  render() {
      let { details, tasks, count, filter} = this.props
      const todolist = tasks


      .filter((todolist) => {
        console.log ('comments',details, todolist)
        return details.id === todolist.id
      })

      console.log('count:', count)

    return (

      <center>
        <div className="form">
          <input type="text" placeholder="What needs to be done?" onChange={this.props.handleChange} className="note" value={this.props.todo}/>
          <button onClick={this.props.handleSave} type="button" className="save">SAVE</button>
        </div>
        <div className="list-box">
          <div className="left-tab"> {count.incomplete} tasks left </div>
          <div className="right-tab">  {count.complete} completed tasks </div>
             
              <ul className="filters">
                <li>
                  <a href="#/" onClick={this.props.updateFilter.bind(this, 'ALL')} >
                      All
                  </a>
                </li>
                {' '}
                <li>
                  <a href="#/active" onClick={this.props.updateFilter.bind(this, 'INCOMPLETE')} >
                      Active
                  </a>
                </li>
                {' '}
                <li>
                  <a href="#/completed" onClick={this.props.updateFilter.bind(this, 'COMPLETE')} >
                      Completed
                  </a>
                </li>
              </ul>

            {
              todolist.map((item, index) => {
                return <ul key={index}>
                            <div className="left" >
                              <label style={ {textDecoration: item.complete ? 'red line-through' : 'none'}}>
                              {item.tasks}</label>
                            </div>
                            <div className="right">
                              <button className="button complete" onClick={this.props.handleComplete.bind(this, item)} >COMPLETE</button>
                              <button className="button remove" onClick={this.props.handleRemove.bind(this, item)}>REMOVE</button>
                            </div>
                        </ul>
              })
            }
        </div>
      </center>
    )
  }
}

export default TodoForm
