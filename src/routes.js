import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {SearchPage} from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />
  }
]);
