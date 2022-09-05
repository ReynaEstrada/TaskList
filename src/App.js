import React, { Component } from 'react'; // componentes de la biblioteca React
import './index.css'; // estilos
import tasks from './Examples/task.json';
//componentes
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm';
class App extends Component {
  
  state = {
    tasks: tasks
  }
  addTask = (title, description) => { //funcion agregar tarea
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id); //Funcion eliminar tarea
    this.setState({tasks: newTasks})
  }
  checkDone = id  =>{
    const newTasks = this.state.tasks.map(task =>{ // funcion de activicion al checkbox
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }
  render(){
    return( 
    <div className='App'>
      <div className='flex flex-wrap justify-center mt-20'>
        <div className='w-full max-w-lg'>
          <form action='' className='shadow-amber-100 bg-pink-300 rounded px-8 pt-6 pb-8 mb-8'>
            <h2 className='block text-gray-900  text-lg font-bold mb-1 text-center'>LISTA DE TAREAS</h2>
              <TaskForm prop1={this.addTask}/> 
              <Tasks prop2={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/> 
          </form>
        </div>
      </div>
    </div>
    );
  }
  // Task form ews el nombre del componente, lo ques esta dentro de las etiqutas son las propiedades que le mando al hijo componente
}
export default App;
