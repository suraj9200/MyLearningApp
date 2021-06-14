
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

const initialState = {
    lines: [],
    selectedLineName: null,
    draw:false
}
const annotationTriangleRed = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ON_LINE_UPDATE_SUCESS:

            return {
                ...state,
                lines: action.data,
            }
        case ActionTypes.ON_LINE_ACTIVE_SUCCESS:

            return {
                ...state,
                selectedLineName: action.data,
            }
        default:
            return state;
    }
}
export default annotationTriangleRed;