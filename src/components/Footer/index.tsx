//Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
      <s.PageListItem>
        <Link to={`/results/${item}`}>{children}</Link>
      </s.PageListItem>
    );
  };

  const Pagination = ({ current, total }: any) => {
    return (
      <s.PageList>
        {current > 1 && <PageItem item={1}>1</PageItem>}

        {current - 1 > 1 && (
          <PageItem item={current - 1}>{current - 1}</PageItem>
        )}

        <s.PageListItem currentPage>{current}</s.PageListItem>

        {current + 1 < total && (
          <PageItem item={current + 1}>{current + 1}</PageItem>
        )}

        {current < total && <PageItem item={total}>{total}</PageItem>}
      </s.PageList>
    );
  };

  return (
    <s.FooterContainer>
      <Pagination current={page} total={totalPages} />
    </s.FooterContainer>
  );
};

export default Footer;
