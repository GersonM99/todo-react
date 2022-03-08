import React, {useState} from 'react';
import './App.css';
import TareaForm from './componentes/TareaForm';
import Tarea from './componentes/tarea'

function App() {
  const[listaTareas, setListaTareas] = useState([]);



  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas])
  }
  console.log(listaTareas)
  return (
    <div className="App">
      <TareaForm
        nuevaTarea={nuevaTarea}>
      </TareaForm>

      {
        listaTareas.map(e => <Tarea tarea={e}/>)
      }
    </div>
  );
}

export default App;
