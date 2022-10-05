import React, { Component } from 'react';
import  toastHelper  from '../../Helpers/ToastHelper';

export default class TaskForm extends Component {
    styles = {
        input: 'my-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-2'
    }
    state = {
        title: '',
        description: ''
    }
    onSubmit = e =>{
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
        toastHelper.sucessToast("Tarea agregada corectamente");
        this.setState({title: '', description: ''})
        }
    
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="flex flex-col justify-center"> 
                        <input className={this.styles.input} autoFocus={true} autoComplete="off" type="text" name="title"  placeholder="Escribe una tarea"  onChange={this.onChange}  value={this.state.title}/>
                        <textarea className={this.styles.input} autoComplete="off" name="description"  placeholder="Escribe una descripción de la tarea"  onChange={this.onChange}  value={this.state.description}></textarea>
                        <input className="py-1 text-white block bg-indigo-500 border border-indigo-500 rounded-md hover:cursor-pointer hover:bg-indigo-400 hover:border-indigo-400 transition duration-200 ease-in-out" type="submit"/>
                    </div>
                </form>
                
            </div>
        )
    }
}