//Dependencies
import React from "react";
import { Link } from "react-router-dom";

//styles
import * as s from "./style";

const Footer = () => {
  // const PageItem = ({ item, children }) => {
  //   return (
  //     <li className="page_item">
  //       <Link to={`/rolls/getAll/${item}`} className="page_link">
  //         {children}
  //       </Link>
  //     </li>
  //   );
  // };

  // const Pagination = ({ current, total }) => {
  //   return (
  //     <ul className="pagination">
  //       {current > 1 && <PageItem item={1}>1</PageItem>}

  //       {current - 1 > 1 && (
  //         <PageItem item={current - 1}>{current - 1}</PageItem>
  //       )}

  //       <li className="page_item">{current}</li>

  //       {current + 1 < total && (
  //         <PageItem item={current + 1}>{current + 1}</PageItem>
  //       )}

  //       {current < total && <PageItem item={total}>{total}</PageItem>}
  //     </ul>
  //   );
  // };

  return (
    <s.FooterContainer>
      <select>
        <option></option>
      </select>
    </s.FooterContainer>
  );
};

export default Footer;
