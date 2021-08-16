export const BookReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action };
    }
  }
};
