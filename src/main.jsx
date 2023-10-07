import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import List from './pages/List.jsx'
import Single from './pages/Single.jsx'
import New from './pages/New.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../redux/Store.js'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <List />,
  },
  {
    path: "/users/:id",
    element: <Single/>,
  },
  {
    path: "/users/new",
    element: <New />,
  },
  {
    path: "/products",
    element: <List />,
  },
  {
    path: "/products/:userId",
    element: <Single />,
  },
  {
    path: "/products/new",
    element: <New />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
