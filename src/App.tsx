//Dependencies
import React from "react";

//Context
import { BooksProvider } from "context/BooksContext";

//Routes
import Routes from "routes";

//Styles
import "./App.css";

function App() {
  return (
    <BooksProvider>
      <Routes />
    </BooksProvider>
  );
}

export default App;
