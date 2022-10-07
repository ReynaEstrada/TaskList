//Este archivo denominado componente, su funcionalidad es encapsular la lista de todas las tareas.
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Task extends Component {

   
render(){    
    const {task} = this.props;
    return <div>
            {task.title} - 
            {task.description} - 
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button className="py-1 px-2 bg-indigo-500 rounded-md boder  shadow-md" onClick={this.props.deleteTask.bind(this,task.id)}>
                x
            </button>
    </div>
}
}
Task.propTypes = {
    task: propTypes.object.isRequired
}
export default Task;
 