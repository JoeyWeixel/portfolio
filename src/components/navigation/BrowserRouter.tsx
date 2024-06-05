import { createBrowserRouter } from "react-router-dom";
import Header from "./Header";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <></>,
  },
 
]);

export default BrowserRouter