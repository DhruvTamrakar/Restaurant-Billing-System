import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
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
      element: <><Navbar /><Menu /></>,
      children: [
        {
          path: ":MenuName",
          element:<><Menus /><Footer /></> ,
        },
      ],
    },
    {
      path: "/Menu/:MenuName/Payment",
      element: <><Navbar /><PaymentSection /><Footer /></>,
      children: [
        {
          path: ":PaymentModes",
          element: <PaymentMode />,
        },
      ],
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
  ]);

  return (

    <div className=''>
   
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
