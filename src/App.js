import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Menu from './Components/Menu';
import Home from './Components/Home';
import PaymentSection from './Components/PaymentSection';
import Menus from './Components/Menus';
import PaymentMode from './Components/PaymentMode';
import Contact from './Components/Contact';
import Layout from './Components/Layout';

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/Menu",
      element: (
        <Layout>
          <Menu />
        </Layout>
      ),
      children: [
        {
          path: ":MenuName",
          element: <Menus />,
        },
      ],
    },
    {
      path: "/Menu/:MenuName/Payment",
      element: (
        <Layout>
          <PaymentSection />
        </Layout>
      ),
      children: [
        {
          path: ":PaymentModes",
          element: <PaymentMode />,
        },
      ],
    },
    {
      path: "/Contact",
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
