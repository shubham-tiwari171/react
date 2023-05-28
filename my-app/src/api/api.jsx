import axios from "axios";

export const postApi = async (todoObj) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/questions",
      todoObj
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getApi = async () => {
  try {
    const response = await axios.get("http://localhost:4000/questions");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
