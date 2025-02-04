import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PaymentSection from './Components/PaymentSection';
import Menus from './Components/Menus';
import PaymentMode from './Components/PaymentMode'
import Contact from './Components/Contact';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },
    {
      path: "/Menu",
      element: <><Navbar /><Menu /><Menus /></>,
      children: [
        {
          path: ":MenuName",
          element: <Menus />,
        },
      ],
    },
    {
      path: "/Menu/:MenuName/Payment",
      element: <><Navbar /><PaymentSection /></>,
      children: [
        {
          path: ":PaymentModes",
          element: <PaymentMode />,
        },
      ],
    },
    {
      path: "/Contact",
      element: <><Navbar /><Contact /></>,
    },
  ]);
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <><Navbar /><Home /></>
  //   },
  //   {
  //     path: "/Menu",
  //     element: <><Navbar /><Menu /><Menus /></>,
  //     children: [
  //       {
  //         path: "/Menu/:MenuName",
  //         element: <><Menus /></>
  //       }
  //     ]
  //   },
  //   {
  //     path: '/Menu/:MenuName/Payment',
  //     element: <><Navbar /><PaymentSection /></>,
  //     children: [
  //       {
  //         path: "/Menu/:MenuName/Payment/:PaymentModes",
  //         element: <><PaymentMode /></>
  //       }
  //     ]
  //   },
  //   {
  //     path: "/Contact",
  //     element: <><Navbar/><Contact/></>
  //   }

  // ])
  return (

    <div className=''>
   
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
