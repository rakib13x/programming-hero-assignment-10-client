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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/addamd",
        element: <AddAmd />,
      },
      {
        path: "/amdproduct",
        element: <Amd />,
        loader: () => fetch("http://localhost:3000/amd"),
      },

      {
        path: "/updateAmd/:id",
        element: <UpdateAmd />,
        loader: ({ params }) => fetch(`http://localhost:3000/amd/${params.id}`),
      },
      {
        path: "/amd-product-details/:id",
        element: <AmdDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/amd/${params.id}`),
      },
      {
        path: "/addapple",
        element: <AddApple />,
      },
      {
        path: "/appleproduct",
        element: <Apple />,
        loader: () => fetch("http://localhost:3000/apple"),
      },
      {
        path: "/updateApple/:id",
        element: <UpdateApple />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/apple/${params.id}`),
      },
      {
        path: "/apple-product-details/:id",
        element: <AppleDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/apple/${params.id}`),
      },
      {
        path: "/addgoogle",
        element: <AddGoogle />,
      },
      {
        path: "/googleproduct",
        element: <Google />,
        loader: () => fetch("http://localhost:3000/google"),
      },
      {
        path: "/updateGoogle/:id",
        element: <UpdateGoogle />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/google/${params.id}`),
      },
      {
        path: "/google-product-details/:id",
        element: <GoogleDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/google/${params.id}`),
      },
      {
        path: "/addintel",
        element: <AddIntel />,
      },
      {
        path: "/intelproduct",
        element: <Intel />,
        loader: () => fetch("http://localhost:3000/intel"),
      },
      {
        path: "/updateIntel/:id",
        element: <UpdateIntel />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/intel/${params.id}`),
      },
      {
        path: "/intel-product-details/:id",
        element: <IntelDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/intel/${params.id}`),
      },
      {
        path: "/addsamsung",
        element: <AddSamsung />,
      },
      {
        path: "/samsungproduct",
        element: <Samsung />,
        loader: () => fetch("http://localhost:3000/samsung"),
      },
      {
        path: "/updateSamsung/:id",
        element: <UpdateSamsung />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/samsung/${params.id}`),
      },
      {
        path: "/samsung-product-details/:id",
        element: <SamsungDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/samsung/${params.id}`),
      },
      {
        path: "/addsony",
        element: <AddSony />,
      },
      {
        path: "/sonyproduct",
        element: <Sony />,
        loader: () => fetch("http://localhost:3000/sony"),
      },
      {
        path: "/updateSony/:id",
        element: <UpdateSony />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sony/${params.id}`),
      },
      {
        path: "/sony-product-details/:id",
        element: <SonyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sony/${params.id}`),
      },
      {
        path: "mycart",
        element: <MyCart />,
        loader: () => fetch("http://localhost:3000/myCart"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
