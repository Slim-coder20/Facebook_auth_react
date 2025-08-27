import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";
import { AuthContext } from "./store/AuthProvider.jsx";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Main = lazy(() => import("./components/layout/Main.jsx"));

export default function App() {
  const { user, loading } = useContext(AuthContext);

  // On vérifie si l'utilisateur est connecté //
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //     } else {
  //       console.log("Non connecté");
  //     }
  //   });
  // }, []);
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" />
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <Suspense>
                <Main />
              </Suspense>
            ),
            children: [
              {
                path: "/",
                element: <Suspense>{user ? <Dashboard /> : <Home />}</Suspense>,
              },
              {
                path: "/signup",
                element: (
                  <Suspense>
                    <Signup />
                  </Suspense>
                ),
              },
            ],
          },
        ])}
      />
    </>
  );
}

/* 
L’import du composant Suspense dans App.jsx sert à gérer le chargement asynchrone de composants React, 
notamment avec le lazy loading (React.lazy).

Suspense permet d’afficher un contenu temporaire (par exemple un loader) pendant que le composant ou les données sont en train d’être chargés. 
Cela améliore l’expérience utilisateur en évitant un écran vide.

Le Context avec React : 
Le concept du "context" dans React permet de partager des données (état, fonctions, thèmes, utilisateur, etc.) 
entre plusieurs composants sans avoir à passer ces données manuellement via les props à chaque niveau de l’arborescence.

À quoi ça sert ?

Éviter le "prop drilling" (passer des props de parent en enfant sur plusieurs niveaux).
Centraliser des informations globales (ex : utilisateur connecté, thème, langue…).
Comment ça marche ?

On crée un contexte avec React.createContext().
On fournit une valeur à ce contexte avec un <Context.Provider>.
On consomme la valeur dans n’importe quel composant enfant avec useContext(Context).

*/
