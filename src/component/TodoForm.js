import React, { Component } from 'react';
import request from 'superagent';

import '../App.css';



class TodoForm extends Component {


  render() {
      const { details, todos } = this.props
      const todolist = todos

      .filter((todolist) => {
        console.log ('comments',details, todolist)
        return details.id == todolist.id
      })
      console.log(todolist)

    return (
        <center>
          <legend>Write Some Notes</legend>
        <input type="text" onChange={this.props.handleChange} name="message" rows="3" cols="40" className="note" value={this.props.todo_empty}/>
        <button onClick={this.props.handleSave} type="button" className="save">Save</button> 
          <div className="comment_box">
            {
              todolist.map((item, index) => {
                return <h4 key={index}>{item.todos}</h4>
              })
            }
          </div>
          </center>
    )
  }
}

export default TodoForm
