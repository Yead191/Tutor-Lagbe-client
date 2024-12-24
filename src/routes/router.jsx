import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TutorDetails from "../components/TutorDetails";
import MyBookedTutor from "../pages/MyBookedTutor";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorial from "../components/UpdateTutorial";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/find-tutors',
        element: <FindTutors></FindTutors>,
        loader: () => fetch('http://localhost:5000/tutorials')
      },
      {
        path: '/add-tutorials',
        element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/tutor/:details',
        element: <PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/tutor/${params.details}`)
      },
      {
        path: '/my-booked-tutor',
        element: <PrivateRoute><MyBookedTutor></MyBookedTutor></PrivateRoute>
      },
      {
        path: '/my-tutorials',
        element: <PrivateRoute><MyTutorials></MyTutorials> </PrivateRoute>
      },
      {
        path: '/update-tutorial/:id',
        element: <PrivateRoute><UpdateTutorial></UpdateTutorial> </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/tutor/${params.id}`)
      },
    ]
  },
]);


export default router;