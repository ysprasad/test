import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        
      },
      {
        path:"/about",
        element:<About/>,
        
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resid",
        element:<Restaurantmenu/>
      }
    ],
    errorElement:<Error/>
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
reportWebVitals(<About/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
