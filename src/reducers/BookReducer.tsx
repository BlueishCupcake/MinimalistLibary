export const BookReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.data };
    }

    case "SET_BOOKS_LIST": {
      return { ...state, booksList: action.data };
    }
  }
};
