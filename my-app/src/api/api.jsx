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

export const getCityData = async () => {
  try {
    const res = await axios.get(
      "http://cdn-api.co-vin.in/api/v2/admin/location/states "
    );
    return res.data.states;
  } catch (error) {
    console.error(error);
  }
};

export const postApiforRegister = async (registerStudentObj) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/student",
      registerStudentObj
    );
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getApiforRegister = async () => {
  try {
    const res = await axios.get("http://localhost:4000/student");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
