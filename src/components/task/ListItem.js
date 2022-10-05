import React, { Component } from 'react';

export default class ListItem extends Component {
    StyleCompleted(){
        return{
            fontSize: '20px',
            color:this.props.task.done ?'#FFFFFF': '#ef4444',
            textDecoration: this.props.task.done? 'line-through':'none'
        }
    }
    render() {
        return (
            <div className="group py-3 sm:py-4 transition duration-200 transform hover:scale-105">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0" style={this.StyleCompleted()}>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {this.props.task.title} {this.props.task.id}
                        </p>
                        <p className="text-sm text-gray-500  dark:text-gray-400">
                            {this.props.task.description}
                        </p>
                    </div>
                    <div className="inline-flex items-center flex-col text-base font-semibold text-gray-900 dark:text-white hidden group-hover:block">
                        <input type="checkbox" onChange={this.props.checkDone.bind(this, this.props.task.id)} checked= {this.props.task.done}/>
                        <button className="py-1 px-2 hover:bg-red-500 text-red-500 hover:text-white rounded-md boder shadow-md transition duration-200 border border-red-500" onClick={this.props.deleteTask.bind(this,this.props.task.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}