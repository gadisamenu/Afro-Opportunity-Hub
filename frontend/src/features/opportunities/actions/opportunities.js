import * as constants from "../../../constants/opportunityActionTypes.js";

export const getOpportunities = () => {
  return { type: constants.GET_OPPOPRTUNITY };
};

export const searchOpportunities = (search) => {
  return { type: constants.SEARCH_OPPOPRTUNITY, payload: search };
};

// export const createCourse = (course) => {
//   return { type: constants.CREATE_COURSE, payload: course };
// };

// export const updateCourse = (course) => {pay
//   return { type: constants.UPDATE_COURSE, payload: course };
// };

// export const deleteCourse = (id) => {
//   return { type: constants.DELETE_COURSE, payload: id };
// };

// export const cleanUp = () => {
//   return { type: constants.CLEAN_UP };
// };
