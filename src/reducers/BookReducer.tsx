export const BookReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.data };
    }

    case "SET_BOOKS_LIST": {
      return { ...state, booksList: action.data };
    }

    case "SET_TOTAL_PAGES": {
      return { ...state, totalPages: action.data };
    }

    case "SET_WORD": {
      return { ...state, word: action.data };
    }
  }
};
