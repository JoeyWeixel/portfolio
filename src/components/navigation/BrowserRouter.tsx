import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'home',
        element: <></>
      },
      {
        path: 'about',
        element: <></>
      },
      {
        path: 'projects',
        element: <></>
      }
    ]
  },
 
]);

export default BrowserRouter