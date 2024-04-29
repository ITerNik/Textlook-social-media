import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Profile} from "./pages/Profile.tsx";
import {Login} from "./pages/Login.tsx";
import {Register} from "./pages/Register.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
