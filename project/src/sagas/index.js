/* eslint-disable no-constant-condition */
import { all, fork, put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import actions, { types } from '../actions';

// UI / GLOBAL

function* fetchUiContent() {
  yield takeEvery(types.FETCH_UI_CONTENT, storeUiContent);
}

function* storeUiContent() {
  const data = yield call(() => fetch('../content/ui.json', { method: 'get' })
    .then(res => res.json()));

  yield put(actions.storeUiContent(data));
  yield put(actions.isLoading(false));
}

// Fetch Home Content

function* fetchProperties() {
  yield takeLatest(types.FETCH_PROPERTIES, storeProperties);
}

function* storeProperties() {
  const data = yield call(() => fetch('../content/properties.json', { method: 'get' })
    .then(res => res.json()));

  yield put(actions.storeProperties(data));
  yield put(actions.isLoading(false));
}

function* sagas() {
  yield all([
    fork(fetchUiContent),
    fork(fetchProperties)
  ]);
}

export default sagas;
