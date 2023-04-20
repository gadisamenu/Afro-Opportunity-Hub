import axios from "axios";
import { API_BASE_URL } from "../../../config";

axios.defaults.withCredentials = true;
const transport = axios.create({
  withCredentials: true,
});

const config = {
  withCredentials: true,
};

export const getOpportunities = async () => {
  try {
    const response = await transport.get(
      API_BASE_URL + "/api/v1/opportunities"
    );

    return response?.data?.data.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const searchOpportunities = async (search) => {
  console.log("search: ", search.payload);
  let searchQuery = "?";
  const keys = Object.keys(search.payload);

  for (let i = 0; i < keys.length; i++) {
    if (search.payload[keys[i]]) {
      searchQuery += keys[i] + "=" + search.payload[keys[i]];
      if (i < keys.length - 1) {
        searchQuery += "&";
      }
    }
  }

  //   const searchQuery = `?type=${search.payload.type}&educationLevel=${search.payload.educationLevel}&country=${search.payload.country}`;
  console.log("searchQuery: ", searchQuery);
  try {
    const response = await transport.get(
      API_BASE_URL + `/api/v1/opportunities/${searchQuery}`
    );
    console.log(response);
    return response?.data?.data.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

// export const createCourse = async (formdata) => {
//   try {
//     const { data } = await transport.post(
//       `${API_BASE_URL}/api/courses`,
//       formdata,
//       config
//     );
//     return data;
//   } catch (error) {
//     if (error?.message === "Network Error") {
//       throw new Error(error?.message);
//     }
//     throw new Error(error?.response?.data?.message);
//   }
// };

// export const updateCourse = async (course) => {
//   try {
//     const { data } = await transport.put(
//       `${API_BASE_URL}/api/course/${course.get("id")}`,
//       course,
//       config
//     );
//     return data;
//   } catch (error) {
//     if (error?.message === "Network Error") {
//       throw new Error(error?.message);
//     }
//     throw new Error(error?.response?.data?.message);
//   }
// };

// export const deleteCourse = async (id) => {
//   try {
//     const { data } = await transport.delete(`${API_BASE_URL}/api/course/${id}`);
//     return data;
//   } catch (error) {
//     if (error?.message === "Network Error") {
//       throw new Error(error?.message);
//     }
//     throw new Error(error?.response?.data?.message);
//   }
// };
