import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import BookMark from "./component/common/BookMark.jsx";
import Store from "./component/AllProduct/Store.jsx";
import Header from "./component/Homepage/Header.jsx";
import Filter from "./component/common/Filter.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Header />} />
      <Route path="store" element={<Store />} />
      <Route path="bookmark" element={<BookMark />} />
      <Route path="store/filter" element={<Filter />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);
