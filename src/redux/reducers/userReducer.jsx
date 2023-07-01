const initialState = {
  teste: 1,
  teste2: 1,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === "ACTION") {
    return { ...state, teste: 2, teste2: action.payload };
  }
  return state;
};
