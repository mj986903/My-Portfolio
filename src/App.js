import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ScrollToTopButton from "./components/ScrollToTop";
import Showcase from "./components/Showcase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Education from "./components/Education";

// Layout component to include Navbar, Footer, and ScrollToTopButton
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16 min-h-[92vh]"> 
        <Outlet /> 
      </main>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />, // Use Layout as the parent component
      children: [
        {
          path: "/",
          element: <Profile />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
        {
          path: "/showcase",
          element: <Showcase />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;