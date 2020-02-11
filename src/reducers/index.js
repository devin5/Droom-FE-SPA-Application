import {
  // register user
  ERROR,
  LOADING,
  REGISTER_SUCCESS,
  SIGN_SUCCESS,
  PRO_SUCCESS,
  ARR_SUCCESS
} from "../actions";

const initialState = {
  profile: {},
  array: [],
  user: {},
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  console.log("action.type: " + action.type);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null
      };
    case SIGN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null
      };
    case PRO_SUCCESS:
      return {
        ...state,
        profile: action.payload[0],
        isLoading: false,
        error: null
      };
    case ARR_SUCCESS:
      return {
        ...state,
        array: action.payload,
        isLoading: false,
        error: null
      };

    default:
      return state;
  }
};
export default reducer;
