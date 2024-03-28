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
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useSelector } from 'react-redux'
import SignUp from './pages/SignUp.jsx'
import Products from './pages/Products.jsx'


const RequireAuth = ({children}) =>{
  const currentUser = useSelector((state) => state.CurrentUserReducer.current)
  return currentUser ? children : <Navigate to='/login'/>
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth><App /></RequireAuth>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/users",
    element: <RequireAuth><List /></RequireAuth>,
  },
  {
    path: "/users/:id",
    element: <RequireAuth><Single/></RequireAuth>,
  },
  {
    path: "/users/new",
    element: <RequireAuth><New /></RequireAuth>,
  },
  // {
  //   path: "/products",
  //   element: <RequireAuth><List /></RequireAuth>,
  // },
  // {
  //   path: "/products/:userId",
  //   element: <RequireAuth><Single /></RequireAuth>,
  // },
  // {
  //   path: "/products/new",
  //   element: <RequireAuth><New /></RequireAuth>,
  // },
  {
    path: "/products",
    element: <RequireAuth><Products /></RequireAuth>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
