import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddedCoffee from './components/AddedCoffee.jsx';
import UpdatedCoffee from './components/UpdatedCoffee.jsx';
import CoffeeCard from './components/CoffeeCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee'),
  },
  {
    path: '/addCoffee',
    element: <AddedCoffee></AddedCoffee>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdatedCoffee></UpdatedCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/coffeeCard',
    element: <CoffeeCard></CoffeeCard>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
