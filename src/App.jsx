import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

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
    return <RouterProvider router={router} />;
}
