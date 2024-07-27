import { Navigate, useRoutes } from "react-router-dom";

// import files
import Lodergif from "../components/loader";
import DashboardLayout from "../layouts/dashboard/dashboardlayout";
import SimpleLayout from "../layouts/simple/SimpleLayout";
import Index from "../pages";
import Page404 from "../pages/page404";

// packages
import useSWR from "swr";

//api files
import { konfhub_endpoint_URL, konfhubData } from "../api/konfhub_api";
import ForgetPassword from "../authentication/forgetpassword";
import SignIn from "../authentication/signin";
import SignUp from "../authentication/signup";
import ErrorPage from "../pages/errorpage";

function Router() {

  const { data, error, isLoading } = useSWR(konfhub_endpoint_URL(), konfhubData);

  console.log("data", data)

  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout data={data} />,
      children: [
        { element: <Navigate to='/konfhub' />, index: true },
        { path: 'konfhub', element: <Index data={data} /> },
      ]
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/konfhub" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: 'login', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'forgetpassword', element: <ForgetPassword /> }
      ],
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  if (isLoading) {
    return <Lodergif />;
  }

  if (error) {
    return <ErrorPage />
  }
  return routes;
}

export default Router;