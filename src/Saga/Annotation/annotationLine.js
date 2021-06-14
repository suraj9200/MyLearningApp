import { fork, call, all, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { AnnotationChart } from "../../Constants/AnnotationChart";
import { drawModeOn } from '../../Actions/AnnotationAction';
const { ActionTypes } = AnnotationChart;

/***************************** Subroutines ************************************/
function* lineUpdate({ data }) {
    
    try {
        yield put({
            type: ActionTypes.ON_LINE_UPDATE_SUCESS,
            data
        });

    }
    catch (error) {

    }

}

function* lineActive({ data }) {
    
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


export function* WatchOnLineUpdate() {
    
    yield takeLatest(ActionTypes.ON_LINE_ADDED, lineUpdate);
}
export function* WatchOnLineActive() {
    
    yield takeLatest(ActionTypes.ON_LINE_ACTIVE, lineActive);
}
/***************************** ******** ************************************/