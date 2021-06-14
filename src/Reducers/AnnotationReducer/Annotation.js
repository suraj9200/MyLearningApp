
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

const initialState = {
    parentLayer: [],
    activeLayer:'',
    activeShape: '',
    isDrawing:false
}
const annotation = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ANNOTATION_PARENT_LAYER_SUCCESS:

            return {
                ...state,
                parentLayer: action.result,
            }

        case ActionTypes.ADD_ANNOTATION_LAYER_SUCCESS:
            
            return {
                ...state,
                parentLayer: [...state.parentLayer, ...action.data]
            }
            case ActionTypes.ON_DRAWING_MODE_SUCCESS:

            return {
                ...state,
                isDrawing: action.data,
            }
        default:
            return state;
    }
}
export default annotation;
