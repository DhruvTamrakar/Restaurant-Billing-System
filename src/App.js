import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PaymentSection from './Components/PaymentSection';
import Menus from './Components/Menus';
import PaymentMode from './Components/PaymentMode'
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>,
    },
    {
      path: "/Menu",
      element: <><Navbar /><Menu /><Footer /></>,
      children: [
        {
          path: ":MenuName",
          element:<><Menus /></> ,
        },
      ],
    },
    {
      path: "/Menu/:MenuName/Payment",
      element: <><Navbar /><PaymentSection /><Footer /></>,
      children: [
        {
          path: ":PaymentModes",
          element:<><PaymentMode /></>,
        },
      ],
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
  ]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const styleEle = {
   position: "fixed",
    top: 0,
    left: 0,
    minHeight: "100vh",
    minWidth: "100%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  }
  return (
    
  <div className=''>
      <RouterProvider router={router} />
      <div style={styleEle}>loading...</div>
    </div>

  );
}

export default App;
