import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';


class Tasks extends Component {
    render(){
        return  this.props.tasks.map(task => 
            <ListItem task={task} key={task.id}  deleteTask={this.props.deleteTask} checkDone={this.props.checkDone}></ListItem>
        );
    }
}
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks;