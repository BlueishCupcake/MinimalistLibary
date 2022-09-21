import React, { useContext, ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { BooksContext } from "context/BooksContext";

import * as s from "./style";

export const Home: React.FC = () => {
  const { dispatch, state } = useContext(BooksContext);

  const { word } = state;

  const history = useNavigate();

  const onClickHandler = useCallback(async () => {
    if (!word) {
      return;
    }

    history(`/results/${word}/1`);
  }, [word, history]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_WORD",
      data: e.currentTarget.value,
    });
  };

  return (
    <s.BodyContainer>
      <s.Label htmlFor="input">Book search</s.Label>
      <s.Form
        onSubmit={(e: any) => {
          e.preventDefault();
          onClickHandler();
        }}
      >
        <s.Input
          id="input"
          type="text"
          autoFocus
          value={word}
          onChange={onChangeHandler}
        />
        <s.Button>Go!</s.Button>
      </s.Form>
    </s.BodyContainer>
  );
};
