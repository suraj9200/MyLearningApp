
import { AnnotationChart } from "../../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;

const initialState = {
    shapes: [
        {
            triangle: [],
            channel: []
        }
    ],
    activeShape: 'Line'
}
const annotationShapeStore = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SHAPE_ADDED_SUCCESS:
            return {
                ...state,
                shapes:
                {
                    ...state.shapes,
                    triangle:action.data.triangle,
                    channel:action.data.channel
                }
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
export default annotationShapeStore;