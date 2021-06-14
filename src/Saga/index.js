import { fork, all } from 'redux-saga/effects';
import {
  WatchHandleAnnotation,
  watchOnDimensionChange,
  WatchOnTriangleUpdate,
  WatchOnTriangleActive,
  WatchOnDrawingModeActive,
  WatchOnLineActive,
  WatchOnLineUpdate,
  WatchOnClickShapeChange,
  watchOnShapeAdded,
  WatchOnShapeActive,
  //New Structure
  WatchHandleSetTraingles,
  WatchOnClickAddLayer,

  WatchOnTriangleAdded,
  WatchOnTextAdded,
  WatchOnActiveShapeData,
  WatchOnRectangleAdded,
  WatchOnCircleAdded,
  watchHandleDrag,
  WatchOnClick
} from './Annotation';

export default function* rootSaga() {
  yield all([
    fork(WatchHandleAnnotation),
    fork(watchOnDimensionChange),
    fork(WatchOnTriangleUpdate),
    fork(WatchOnTriangleActive),
    fork(WatchOnDrawingModeActive),
    fork(WatchOnLineActive),
    fork(WatchOnLineUpdate),
    fork(WatchOnClickShapeChange),
    fork(watchOnShapeAdded),
    fork(WatchOnShapeActive),
    //New Structure
    fork(WatchHandleSetTraingles),
    fork(WatchOnClickAddLayer),
    fork(WatchOnTriangleAdded),
    fork(WatchOnTextAdded),
    fork(WatchOnActiveShapeData),
    fork(WatchOnRectangleAdded),
    fork(WatchOnCircleAdded),
    fork(watchHandleDrag),
    fork(WatchOnClick)
  ])
}