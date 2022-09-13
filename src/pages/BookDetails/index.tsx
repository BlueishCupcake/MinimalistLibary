import React from "react";

import { Header } from "components/Header";
import { BookDetailsBody } from "components/BookDetailsBody";

export const BookDetails: React.FC = () => {
  return (
    <>
      <Header />
      <BookDetailsBody />
    </>
  );
};
