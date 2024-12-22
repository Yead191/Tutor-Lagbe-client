import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import Login from "../pages/Login";
import Register from "../pages/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/find-tutors',
            element: <FindTutors></FindTutors>,
            loader: ()=>fetch('http://localhost:5000/tutorials')
        },
        {
            path: '/add-tutorials',
            element: <AddTutorials></AddTutorials>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;