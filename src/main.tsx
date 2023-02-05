import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


//pages
import Home from "./routes/home"

//configurando react router dom

const router = createBrowserRouter([
  //primeiro objeto será o elemento que ira conter as paginas ou seja esse elemento estará presente em todas as rotas;

  {
    path:"/",
    element:<App/>,
    children:[
      //aqui dentro será passado as paginas a serem renderizadas
      {
        path:"/",
        element:<Home/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
