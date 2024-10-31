import { RouteObject } from "react-router-dom";
import Home from "../Page/Home/home";
import RootLayout from "../layout/RootLayout";
import Detail from "../Page/Detail/detail";
import Cart from "../Page/Cart/cart";
import Category from "../Page/category";
import Search from "../Page/search";

const route: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search/:name",
        element: <Search />,
      },
      {
        path: "Category/:category",
        element: <Category />,
      },
    ],
  },
];

export default route