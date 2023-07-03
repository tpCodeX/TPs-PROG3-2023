import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TaskContainer from './components/TaskContainerComp/TaskContainerComp'
import CuentaComp from './Classes/CuentaBancaria/CuentaBancaria'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <TaskContainer/>
  {/* <CuentaComp/> */}
  </React.StrictMode>,
)
