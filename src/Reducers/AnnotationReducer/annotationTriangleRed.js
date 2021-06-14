
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

const initialState = {
    shapes: [],
    selectedShapeName: null,
    draw:false
}
const annotationTriangleRed = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ON_TRIANGLE_UPDATE_SUCESS:

            return {
                ...state,
                shapes: action.data,
            }
        case ActionTypes.INIT_CHART_LOAD_SUCCESS:

            return {
                ...state,
                shapes: action.data,
            }
        case ActionTypes.ON_TRI_SHAPE_ACTIVE_SUCCESS:

            return {
                ...state,
                selectedShapeName: action.data,
            }
      
        default:
            return state;
    }
}
export default annotationTriangleRed;