import { fork, call, all, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

/***************************** Subroutines ************************************/

function* onShapeAdded({ data }) {

    try {
        yield put({
            type: ActionTypes.SHAPE_ADDED_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}

function* onShapeActive({ data }) {

    try {
        yield put({
            type: ActionTypes.SHAPE_ACTIVE_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}
/***************************** *********** ************************************/

/***************************** Watchers ************************************/


export function* watchOnShapeAdded() {

    yield takeLatest(ActionTypes.SHAPE_ADDED, onShapeAdded);
}
export function* WatchOnShapeActive() {

    yield takeLatest(ActionTypes.SHAPE_ACTIVE, onShapeActive);
}
/***************************** ******** ************************************/