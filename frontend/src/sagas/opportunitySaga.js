import { call, put, takeEvery } from "redux-saga/effects";

import * as api from "../features/opportunities/api/index.js";
import * as types from "../constants/opportunityActionTypes.js";

function* getOpportunities() {
  try {
    const opportunities = yield call(api.getOpportunities);
    yield put({ type: types.GET_OPPOPRTUNITY_SUCCESS, payload: opportunities });
  } catch (error) {
    yield put({
      type: types.GET_OPPOPRTUNITY_FAILED,
      payload: error,
    });
  }
}

function* searchOpportunities(payload) {
  try {
    const opportunities = yield call(api.searchOpportunities, payload);
    yield put({
      type: types.SEARCH_OPPOPRTUNITY_SUCCESS,
      payload: opportunities,
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_OPPOPRTUNITY_FAILED,
      payload: error,
    });
  }
}

// function* createCourse({ payload }) {
//   try {
//     const course = yield call(api.createCourse, payload);
//     yield put({ type: types.CREATE_COURSE_SUCCESS, payload: course });
//   } catch (error) {
//     yield put({
//       type: types.CREATE_COURSE_FAILED,
//       payload: error,
//     });
//   }
// }

// function* updateCourse({ payload }) {
//   try {
//     const course = yield call(api.updateCourse, payload);
//     yield put({ type: types.UPDATE_COURSE_SUCCESS, payload: course });
//   } catch (error) {
//     yield put({ type: types.UPDATE_COURSE_FAILED, payload: error });
//   }
// }

// function* deleteCourse({ payload }) {
//   try {
//     const course = yield call(api.deleteCourse, payload);
//     yield put({ type: types.DELETE_COURSE_SUCCESS, payload: course });
//   } catch (error) {
//     yield put({ type: types.DELETE_COURSE_FAILED, payload: error });
//   }
// }

function* opportunitySaga() {
  yield takeEvery(types.GET_OPPOPRTUNITY, getOpportunities);
  yield takeEvery(types.SEARCH_OPPOPRTUNITY, searchOpportunities);

  //   yield takeEvery(types.CREATE_COURSE, createCourse);
  //   yield takeEvery(types.UPDATE_COURSE, updateCourse);
  //   yield takeEvery(types.DELETE_COURSE, deleteCourse);
}

export default opportunitySaga;
