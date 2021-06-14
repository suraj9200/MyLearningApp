import { fork, call, all, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { AnnotationChart } from "../../Constants/AnnotationChart";
import { drawModeOn } from '../../Actions/AnnotationAction';
const { ActionTypes } = AnnotationChart;

/***************************** Subroutines ************************************/
/***NEW STRUCTURE***/
function* setTraingle({ data }) {
    
    try {
        yield put({
            type: ActionTypes.SET_ANNOTATION_TRIANGLES_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}
/****************************/
function* loadChart() {
    try {
        yield put({
            type: ActionTypes.INIT_CHART_LOAD_SUCCESS,
        });

    }
    catch (error) {

    }
}


function* triangleUpdate({ data }) {
    
    try {
        yield put({
            type: ActionTypes.ON_TRIANGLE_UPDATE_SUCESS,
            data
        });

    }
    catch (error) {

    }

}

function* triangleActive({ data }) {
    
    try {
        yield put({
            type: ActionTypes.ON_TRI_SHAPE_ACTIVE_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}





/***************************** *********** ************************************/

/***************************** Watchers ************************************/
/***NEW STRUCTURE***/
export function* WatchHandleSetTraingles() {
    yield takeLatest(ActionTypes.SET_ANNOTATION_TRIANGLES, setTraingle);
}


/***NEW STRUCTURE***/
export function* WatchHandleAnnotation() {
    yield takeLatest(ActionTypes.INIT_CHART_LOAD, loadChart);
}

export function* WatchOnTriangleUpdate() {
    
    yield takeLatest(ActionTypes.ON_TRI_SHAPE_ADDED, triangleUpdate);
}

export function* WatchOnTriangleActive() {
    
    yield takeLatest(ActionTypes.ON_TRI_SHAPE_ACTIVE, triangleActive);
}



/***************************** ******** ************************************/