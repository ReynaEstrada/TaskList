import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';


class Tasks extends Component {
    render(){
        return  this.props.prop2.map(task => 
        <Task 
            task={task} 
            key={task.id} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />);    //Esto es un recorrido de los  elementos de mi arreglo
    }
}
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks;