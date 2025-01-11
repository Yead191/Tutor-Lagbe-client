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
import Tutor from "../components/Tutor";
import TutorsByCategories from "../components/TutorsByCategories";
import ScrollToTop from "../components/ScrollToTop";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <Root></Root>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://tutor-lagbe-server.vercel.app/categories')
      },
      {
        path: '/find-tutors',
        element: <FindTutors></FindTutors>,
        loader: () => fetch('https://tutor-lagbe-server.vercel.app/categories'),
        children: [
          {
            index: true,
            element: <Tutor></Tutor>,
            loader: () => fetch('https://tutor-lagbe-server.vercel.app/tutorials'),
          },
          {
            path: 'category/:category',
            element: <TutorsByCategories></TutorsByCategories>,
            loader: ({ params }) =>
              fetch(`https://tutor-lagbe-server.vercel.app/tutorials/${params.category}`),
          },

        ],
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
        element: <TutorDetails></TutorDetails>,
        loader: ({ params }) => fetch(`https://tutor-lagbe-server.vercel.app/tutor/${params.details}`)
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
        loader: ({ params }) => fetch(`https://tutor-lagbe-server.vercel.app/tutor/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
      },
    ]
  },
]);


export default router;