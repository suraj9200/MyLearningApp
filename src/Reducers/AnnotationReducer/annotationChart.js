
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

const initialState = {

    chartDimension: {
        width: 0,
        height: 0
    },
    shapes:[],
    activeShape:'Line'
}
const annotationChart = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ON_DIMENSION_CHANGE_SUCSESS:
        
            return {
                ...state,
                chartDimension: action.dimension,
            }
            case ActionTypes.ON_CLICK_ACTIVE_SHAPE_SUCCESS:
            return {
                ...state,
                activeShape: action.data,
            }
        default:
            return state
    }
}
export default annotationChart;