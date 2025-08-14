import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Layout from "./Layout";
import About from "./components/about/About";
import Home from "./components/home/Home";
import User from "./components/user/User";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Contact from "./components/contact/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
// index=true,
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       }
//       ,
//       {
//         path: "Contact",
//         element: <Contact />,
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home/>} />
    <Route path='About' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='sonu/:userid' element={<User/>} />


  </Route>
)

)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
