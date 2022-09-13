import React, { useContext } from "react";

import { Pagination } from "components/Pagination";

import { BooksContext } from "context/BooksContext";

import { GetPage } from "helpers/getPage";

import * as s from "./style";

export const Footer: React.FC = () => {
  const { state } = useContext(BooksContext);

  const { totalPages } = state;

  const page = GetPage();

  return (
    <s.FooterContainer>
      <Pagination current={page} total={totalPages} />
    </s.FooterContainer>
  );
};
