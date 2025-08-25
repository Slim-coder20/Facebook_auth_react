import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; 

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <Signup />
      </Suspense>
    ),
  },
]);

export default function App() {
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}

/* 
L’import du composant Suspense dans App.jsx sert à gérer le chargement asynchrone de composants React, 
notamment avec le lazy loading (React.lazy).

Suspense permet d’afficher un contenu temporaire (par exemple un loader) pendant que le composant ou les données sont en train d’être chargés. 
Cela améliore l’expérience utilisateur en évitant un écran vide.




*/
