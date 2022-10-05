import React from 'react';
//import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Tasks = function(props){
    const [list] = useAutoAnimate(/* optional config */)
    return(
        <div ref={list}>
            {
                props.tasks.map(
                    task => <ListItem task={task} key={task.id}  deleteTask={props.deleteTask} checkDone={props.checkDone}></ListItem>
                )
            }
        </div>
    )
}
export default Tasks;