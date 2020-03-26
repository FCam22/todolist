import React, {Component} from 'react';

class ToDoList extends Component {

constructor(){
  super();
  this.state = {
    todos: [],
    currentToDo: "",
  }
}

//this is where we code our methods

addItem = (event) => {
  event.preventDefault();
  console.log("The addItem method executed");
}

handleChange = (event)=> {
  console.log(event.target.value);
}

render() {
  return (
  <div className="container">
      <form onSubmit={this.addItem}>
        <label htmlFor="taskName">Task Name:</label>
        <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here!"/>
        <button type="submit">Add Task</button>
      </form>

    /*here is where we build the list with a delete button

  </div>




  )

}

}

export default ToDoList;