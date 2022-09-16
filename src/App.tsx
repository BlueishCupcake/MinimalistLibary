import React from "react";

import { BooksProvider } from "context/BooksContext";

import Routes from "pages/routes";

export const App: React.FC = () => {
  return (
    <BooksProvider>
      <Routes />
    </BooksProvider>
  );
};
