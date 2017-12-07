import React, { Component } from 'react';
import request from 'superagent';

import '../App.css';



class TodoForm extends Component {


  render() {
      const { details, todos, active, ids } = this.props
      const todolist = todos

      .filter((todolist) => {
        console.log ('comments',details, todolist, active)
        return details.id == todolist.id
      })
      console.log('active', active)

    return (

      <center>
        <div className="form">
          <input type="text" onChange={this.props.handleChange} name="message" rows="3" cols="40" className="note" value={this.props.todo}/>
          <button onClick={this.props.handleSave} type="button" className="save">SAVE</button>
        </div>
        <div className="list-box">
          <div className="tab">{active} tasks left</div>
            {
              todolist.map((item, index) => {
                return <ul key={index}>
                            <div className="list left">{item.todos}</div>
                            <div className="list right">
                              <button className="button complete" onClick={this.props.handleComplete}>COMPLETE</button>
                              <button className="button remove" onClick={this.props.handleRemove}>REMOVE</button>
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
