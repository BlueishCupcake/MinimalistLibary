import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "pages/Home";
import { SearchResults } from "pages/SearchResults";
import { BookDetails } from "pages/BookDetails";
import { FavoritesPage } from "pages/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/results/:word/:page",
    element: <SearchResults />,
  },

  {
    path: "/details/:id",
    element: <BookDetails />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
