import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/Authentication/LogIn/LogIn.jsx";
import Register from "./components/Authentication/Register/Register.jsx";
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import MyCart from "./components/MyCart/MyCart.jsx";
import Home from "./components/Home/Home.jsx";
import AddAmd from "./components/BrandsProducts/AmdProducts/AddAmd.jsx";
import AddApple from "./components/BrandsProducts/AppleProducts/AddApple.jsx";
import AddGoogle from "./components/BrandsProducts/GoogleProducts/AddGoogle.jsx";
import AddSamsung from "./components/BrandsProducts/SamsungProducts/AddSamsung.jsx";
import AddIntel from "./components/BrandsProducts/IntelProducts/AddIntel.jsx";
import AddSony from "./components/BrandsProducts/SonyProducts/AddSony.jsx";
import Amd from "./components/BrandsProducts/AmdProducts/Amd.jsx";
import UpdateAmd from "./components/BrandsProducts/AmdProducts/UpdateAmd.jsx";
import Apple from "./components/BrandsProducts/AppleProducts/Apple.jsx";
import UpdateApple from "./components/BrandsProducts/AppleProducts/UpdateApple.jsx";
import Google from "./components/BrandsProducts/GoogleProducts/Google.jsx";
import UpdateGoogle from "./components/BrandsProducts/GoogleProducts/UpdateGoogle.jsx";
import Intel from "./components/BrandsProducts/IntelProducts/Intel.jsx";
import UpdateIntel from "./components/BrandsProducts/IntelProducts/UpdateIntel.jsx";
import Samsung from "./components/BrandsProducts/SamsungProducts/Samsung.jsx";
import UpdateSamsung from "./components/BrandsProducts/SamsungProducts/UpdateSamsung.jsx";
import Sony from "./components/BrandsProducts/SonyProducts/Sony.jsx";
import UpdateSony from "./components/BrandsProducts/SonyProducts/UpdateSony.jsx";
import AmdDetails from "./components/BrandsProducts/AmdProducts/AmdDetails.jsx";
import AppleDetails from "./components/BrandsProducts/AppleProducts/AppleDetails.jsx";
import GoogleDetails from "./components/BrandsProducts/GoogleProducts/GoogleDetails.jsx";
import IntelDetails from "./components/BrandsProducts/IntelProducts/IntelDetails.jsx";
import SamsungDetails from "./components/BrandsProducts/SamsungProducts/SamsungDetails.jsx";
import SonyDetails from "./components/BrandsProducts/SonyProducts/SonyDetails.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import ErrorPage from "./components/Error/ErrorPage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LogIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/addamd",

        element: <AddAmd />,

        errorElement: <ErrorPage />,
      },
      {
        path: "/amdproduct",

        element: (
          <PrivateRoute>
            <Amd />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/amd"),
      },

      {
        path: "/updateAmd/:id",
        element: (
          <PrivateRoute>
            <UpdateAmd />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) => fetch(`http://localhost:3000/amd/${params.id}`),
      },
      {
        path: "/amd-product-details/:id",
        element: <AmdDetails />,
        errorElement: <ErrorPage />,
        loader: ({ params }) => fetch(`http://localhost:3000/amd/${params.id}`),
      },
      {
        path: "/addapple",
        element: <AddApple />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/appleproduct",
        element: (
          <PrivateRoute>
            <Apple />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/apple"),
      },
      {
        path: "/updateApple/:id",
        element: (
          <PrivateRoute>
            <UpdateApple />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/apple/${params.id}`),
      },
      {
        path: "/apple-product-details/:id",
        element: (
          <PrivateRoute>
            <AppleDetails />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/apple/${params.id}`),
      },
      {
        path: "/addgoogle",
        element: (
          <PrivateRoute>
            <AddGoogle />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/googleproduct",
        element: (
          <PrivateRoute>
            <Google />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/google"),
      },
      {
        path: "/updateGoogle/:id",
        element: (
          <PrivateRoute>
            <UpdateGoogle />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/google/${params.id}`),
      },
      {
        path: "/google-product-details/:id",
        element: (
          <PrivateRoute>
            <GoogleDetails />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/google/${params.id}`),
      },
      {
        path: "/addintel",
        element: (
          <PrivateRoute>
            <AddIntel />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/intelproduct",
        element: (
          <PrivateRoute>
            <Intel />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/intel"),
      },
      {
        path: "/updateIntel/:id",
        element: (
          <PrivateRoute>
            <UpdateIntel />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/intel/${params.id}`),
      },
      {
        path: "/intel-product-details/:id",
        element: (
          <PrivateRoute>
            <IntelDetails />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/intel/${params.id}`),
      },
      {
        path: "/addsamsung",
        element: (
          <PrivateRoute>
            <AddSamsung />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/samsungproduct",
        element: (
          <PrivateRoute>
            <Samsung />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/samsung"),
      },
      {
        path: "/updateSamsung/:id",
        element: (
          <PrivateRoute>
            <UpdateSamsung />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/samsung/${params.id}`),
      },
      {
        path: "/samsung-product-details/:id",
        element: (
          <PrivateRoute>
            <SamsungDetails />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/samsung/${params.id}`),
      },
      {
        path: "/addsony",
        element: (
          <PrivateRoute>
            <AddSony />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/sonyproduct",
        element: (
          <PrivateRoute>
            <Sony />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/sony"),
      },
      {
        path: "/updateSony/:id",
        element: (
          <PrivateRoute>
            <UpdateSony />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sony/${params.id}`),
      },
      {
        path: "/sony-product-details/:id",
        element: (
          <PrivateRoute>
            <SonyDetails />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sony/${params.id}`),
      },
      {
        path: "mycart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        loader: () => fetch("http://localhost:3000/myCart"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
