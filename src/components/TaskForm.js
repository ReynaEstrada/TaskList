import React, { Component } from 'react';

export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }
    onSubmit = e =>{
        this.props.prop1(this.state.title, this.state.description)
        e.preventDefault();
        }
    
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){        
        return (
            <form onSubmit={this.onSubmit} className='bg-green-400 row-auto' >
               <div className=' columns-12'>
                    <div className='m-6'>
                        <input 
                            type="text"
                            name="title" 
                            placeholder="Escribe una tarea" 
                            onChange={this.onChange} 
                            value={this.state.title}
                        />
                    </div>
                    <div className='m-48'>
                        <textarea
                            name="description" 
                            placeholder="Descripción" 
                            border-color='#b91c1c'
                            onChange={this.onChange} 
                            value={this.state.description}
                            id="border"
                            >  
                        </textarea>
                    </div> 
                </div> 
                <footer>
                    <input type="submit" className='border-2 border-indigo-500 bg-indigo-500 text-white rounded-md px-1 hover:bg-indigo-300 justify-center'/>
                </footer>
            </form>
        )
    }
}