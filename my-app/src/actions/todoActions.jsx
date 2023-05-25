// import { actions } from "./Constants";
import axios from "axios";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODO } from "./Constants";

// Rest of the code...

const fetchTodo = (todos) => {
  return {
    type: FETCH_TODO,
    payload: todos,
  };
};

export const getTodo = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/data");
      dispatch(fetchTodo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getData = async () => {
//   let res = await axios.get("http://localhost:4000/data");
//   // console.log(res.data)
//   return res.data;
// };
