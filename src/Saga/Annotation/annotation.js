import { fork, call, all, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

/***************************** Subroutines ************************************/

function* reSetOnDimensionChange({ dimension }) {

    try {
        yield put({
            type: ActionTypes.ON_DIMENSION_CHANGE_SUCSESS,
            dimension
        });

    }
    catch (error) {

    }

}

function* onClickChangeActiveShape({ data }) {
    try {
        yield put({
            type: ActionTypes.ON_CLICK_ACTIVE_SHAPE_SUCCESS,
            data
        });
    }
    catch (error) {

    }
}
/**************NEW STRUCTURES******************/
function* onClickAddLayer({ data }) {
    try {
        yield put({
            type: ActionTypes.ADD_ANNOTATION_LAYER_SUCCESS,
            data
        });
    }
    catch (error) {

    }
}
function* onDrawMode({ data }) {
    
    try {
        yield put({
            type: ActionTypes.ON_DRAWING_MODE_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}
/**************NEW STRUCTURES******************/
/***************************** *********** ************************************/

/***************************** Watchers ************************************/


export function* watchOnDimensionChange() {

    yield takeLatest(ActionTypes.ON_DIMENSION_CHANGE, reSetOnDimensionChange);
}
export function* WatchOnClickShapeChange() {

    yield takeLatest(ActionTypes.ON_CLICK_ACTIVE_SHAPE, onClickChangeActiveShape);
}

/**************NEW STRUCTURES******************/
export function* WatchOnClickAddLayer() {

    yield takeLatest(ActionTypes.ADD_ANNOTATION_LAYER, onClickAddLayer);
}

export function* WatchOnDrawingModeActive() {
    
    yield takeLatest(ActionTypes.ON_DRAWING_MODE, onDrawMode);
}
/**************NEW STRUCTURES******************/
/***************************** ******** ************************************/