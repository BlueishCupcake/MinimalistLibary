import React from "react";
import { useParams } from "react-router-dom";

import { PageItem } from "../PageItem";

import * as s from "./style";

type PaginationTypes = {
  current: number;
  total: number;
};

export const Pagination: React.FC<PaginationTypes> = ({ current, total }) => {
  const { word } = useParams();

  return (
    <s.PageList>
      {current > 1 && (
        <PageItem word={word} item={1}>
          1
        </PageItem>
      )}

      {current - 1 > 1 && (
        <PageItem word={word} item={current - 1}>
          {current - 1}
        </PageItem>
      )}

      <s.PageListItem currentPage>{current}</s.PageListItem>

      {current + 1 < total && (
        <PageItem word={word} item={current + 1}>
          {current + 1}
        </PageItem>
      )}

      {current + 2 < total && (
        <PageItem word={word} item={current + 2}>
          {current + 2}
        </PageItem>
      )}
    </s.PageList>
  );
};
