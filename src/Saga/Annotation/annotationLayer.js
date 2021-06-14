import { takeLatest, put, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { AnnotationChart } from "../../Constants/AnnotationChart";
import annotationLayers from '../../Reducers/AnnotationReducer/annotationLayers';
import { getLeftPanelReducerState } from '../../Reducers/selectors';
const { ActionTypes } = AnnotationChart;



let name, px1, px2, px3, px4, py1, py2, py3, py4, points;
/***************************** Model Logic ************************************/
function* handleClickMouseDown(getLeftPanelReducerState, getRightPanelReducerState, e) {
    ;
    const getLeftPanelReducer = yield select(getLeftPanelReducerState);
    const getRightPanelReducer = yield select(getRightPanelReducerState);

    let {
        Layers,
    } = getLeftPanelReducer;
    let {
        activeShape,
    } = getRightPanelReducer;

    yield put({
        type: ActionTypes.HANDLE_CLICK_SUCCESS,

    });
}

function* handleClick({data}) {
    ;
    // yield put({
    //     type: ActionTypes.HANDLE_CLICK_SUCCESS,

    // });
}

// function handleDragEvent(leftPanelReducerState,e) {
//     ;
//     let shapes;
//     const type = e.currentTarget.attrs.type;
//     if(type=== 'triangle')
//     {
//         shapes= leftPanelReducerState.Triangles;
//     }else if(type=== 'rectangle')
//     {
//         shapes= leftPanelReducerState.Rectangles;
//     }
//     else
//     {
//         shapes= leftPanelReducerState.Circles;
//     }
//     const name = e.currentTarget.attrs.name;
//     // const dragShape = e.currentTarget.attrs.selectedShape;
//     const newShapesList = shapes.slice();
//     let shape = newShapesList.filter(item => item.name === name);
//     // shape = shape.find((item, key) => key === index);
//     shape.x = e.currentTarget.x();
//     shape.y = e.currentTarget.y();
//     return { shapes: newShapesList };
// }
/***************************** Model Logic ************************************/
/***************************** Subroutines ************************************/
function* triangleAdded({ data }) {

    try {
        yield put({
            type: ActionTypes.SET_ANNOTATION_TRIANGLES_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}

function* RectangleAdded({ data }) {

    try {
        yield put({
            type: ActionTypes.SET_ANNOTATION_RECTANGLES_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}

function* CircleAdded({ data }) {

    try {
        yield put({
            type: ActionTypes.SET_ANNOTATION_CIRCLES_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}


function* textAdded({ data }) {

    try {
        yield put({
            type: ActionTypes.SET_ANNOTATION_TEXT_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}

function* setActiveShapeData({ data }) {

    try {
        yield put({
            type: ActionTypes.SET_ANNOTATION_ACTIVE_DATA_SUCCESS,
            data
        });

    }
    catch (error) {

    }

}

function* handleDrag({ e }) {
    ;
    // const leftPanelReducerState = yield select(getLeftPanelReducerState);

    // const mouseMoveState = yield call(handleDragEvent,leftPanelReducerState, e)

    // yield put({
    //     type: ActionTypes.HANDLE_MOUSE_MOVE_SUCCESS,
    //     mouseMoveState
    // });
}

/***************************** *********** ************************************/

/***************************** Watchers ************************************/


export function* WatchOnTriangleAdded() {

    yield takeLatest(ActionTypes.SET_ANNOTATION_TRIANGLES, triangleAdded);
}

export function* WatchOnTextAdded() {

    yield takeLatest(ActionTypes.SET_ANNOTATION_TEXT, textAdded);
}

export function* WatchOnActiveShapeData() {

    yield takeLatest(ActionTypes.SET_ANNOTATION_ACTIVE_DATA, setActiveShapeData);
}

export function* WatchOnRectangleAdded() {

    yield takeLatest(ActionTypes.SET_ANNOTATION_RECTANGLES, RectangleAdded);
}

export function* WatchOnCircleAdded() {

    yield takeLatest(ActionTypes.SET_ANNOTATION_CIRCLES, CircleAdded);
}

export function* watchHandleDrag() {
    yield takeLatest(ActionTypes.HANDLE_DRAG, handleDrag);
};


// export function* watchHandleClick() {
//     yield takeLatest(ActionTypes.HANDLE_CLICK, handleClickMouseDown);
// };


export function* WatchOnClick() {

    yield takeLatest(ActionTypes.HANDLE_CLICK, handleClickMouseDown);
}



/***************************** ******** ************************************/