//Dependencies
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Context
import { BooksContext } from "context/BooksContext";

//Helpers
import { GetPage } from "helpers/getPage";

//styles
import * as s from "./style";

const Footer = () => {
  const { state } = useContext(BooksContext);

  const { totalPages } = state;

  const page = GetPage();

  const PageItem = ({ item, children }: any) => {
    return (
      <li>
        <Link to={`/results/${item}`}>{children}</Link>
      </li>
    );
  };

  const Pagination = ({ current, total }: any) => {
    return (
      <ul>
        {current > 1 && <PageItem item={1}>1</PageItem>}

        {current - 1 > 1 && (
          <PageItem item={current - 1}>{current - 1}</PageItem>
        )}

        <li>{current}</li>

        {current + 1 < total && (
          <PageItem item={current + 1}>{current + 1}</PageItem>
        )}

        {current < total && <PageItem item={total}>{total}</PageItem>}
      </ul>
    );
  };

  return (
    <s.FooterContainer>
      <Pagination current={page} total={totalPages} />
    </s.FooterContainer>
  );
};

export default Footer;
