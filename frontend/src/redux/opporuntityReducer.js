import * as types from "../constants/opportunityActionTypes.js";
const initialState = {
  opportunities: [],
  loading: false,
  success: false,
  failed: false,
  message: "",
  isCreate: false,
  isUpdate: false,
  isDelete: false,
};

const opportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_OPPOPRTUNITY:
      return {
        ...state,
        loading: true,
      };
    case types.GET_OPPOPRTUNITY_SUCCESS:
      return {
        ...state,
        opportunities: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_OPPOPRTUNITY_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload.toString(),
      };

    case types.SEARCH_OPPOPRTUNITY:
      return {
        ...state,
        loading: true,
      };
    case types.SEARCH_OPPOPRTUNITY_SUCCESS:
      return {
        ...state,
        opportunities: action.payload,
        loading: false,
        success: true,
      };
    case types.SEARCH_OPPOPRTUNITY_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload.toString(),
      };

    // create course
    // case types.CREATE_COURSE:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case types.CREATE_COURSE_SUCCESS:
    //   return {
    //     ...state,
    //     courses: [action.payload, ...state.opporuntities],
    //     loading: false,
    //     success: true,
    //     isCreate: true,
    //   };
    // case types.CREATE_COURSE_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: false,
    //     message: action.payload.toString(),
    //   };

    // // update course
    // case types.UPDATE_COURSE:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case types.UPDATE_COURSE_SUCCESS:
    //   return {
    //     ...state,
    //     courses: [
    //       action.payload,
    //       ...state.opporuntities.filter((course) => course.id !== action.payload.id),
    //     ],

    //     loading: false,
    //     success: true,
    //     isUpdate: true,
    //   };
    // case types.UPDATE_COURSE_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: false,
    //     message: action.payload.toString(),
    //   };

    // // delete course
    // case types.DELETE_COURSE:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case types.DELETE_COURSE_SUCCESS:
    //   return {
    //     ...state,
    //     courses: state?.opporuntities?.filter(
    //       (course) => course?.id !== action?.payload?.id
    //     ),
    //     loading: false,
    //     success: true,
    //     isDelete: true,
    //   };
    // case types.DELETE_COURSE_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: false,
    //     message: action.payload.toString(),
    //   };
    // case types.CLEAN_UP:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: false,
    //     message: "",
    //     isCreate: false,
    //     isUpdate: false,
    //     isDelete: false,
    //   };

    default:
      return state;
  }
};

export default opportunityReducer;
