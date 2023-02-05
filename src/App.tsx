import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

function App() {

  return (
    <div className={classes.App}>
      <h1>github users</h1>
      <Outlet/>
    </div>
  )
}

export default App
