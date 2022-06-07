import React, { Component } from 'react';
import './App.css';
import tasks from './Examples/task.json';
//componentes
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import  toastHelper  from './Helpers/ToastHelper';
class App extends Component {
  
  state = {
    tasks: tasks
  }
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: (this.state.tasks[this.state.tasks.length -1 ].id) + 1
    }
    //Trae el ultimo dato que se ingreso y le suma 1 al id de ese dato
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id) => {
    let userResponse = window.confirm('¿Estas seguro de eliminar esta tarea?');
    if(userResponse){
      const newTasks = this.state.tasks.filter(task => task.id !== id);
      toastHelper.sucessToast("Tarea "+id+" eliminada correctamente");
      this.setState({tasks: newTasks})
    }else{
      toastHelper.infoToast("Tarea "+id+" no eliminada");
    }
  }
  checkDone = id  =>{
    const newTasks = this.state.tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }
  render(){
    return <div>
              <ToastContainer autoClose={8000} />
              <div className="flex justify-center min-h-screen mx-auto">
                <div className="p-4 max-w-xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-start items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Tareas</h3>
                    </div>
                    <div>
                      <TaskForm addTask={this.addTask}/>
                    </div>
                    <div className="flow-root">
                        <div role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
  }
}
export default App;
