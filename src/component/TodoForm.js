import React, { Component } from 'react';

import '../App.css';



class TodoForm extends Component {


  render() {
      let { details, tasks, active} = this.props
      const todolist = tasks

      .filter((todolist) => {
        console.log ('comments',details, todolist)
        return details.id === todolist.id
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
