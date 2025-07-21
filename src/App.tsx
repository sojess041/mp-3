import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

import Home from "./mains/Home";
import Employment from "./mains/Employment";
import Education from "./mains/Education";
import Extracurriculars from "./mains/Extracurriculars";

import More from "./mains/More";
import Credits from "./mains/Credits";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "employment", element: <Employment /> },
      { path: "education", element: <Education /> },
      { path: "extracurriculars", element: <Extracurriculars /> },
      { path: "more", element: <More /> },
      { path: "credits", element: <Credits /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}