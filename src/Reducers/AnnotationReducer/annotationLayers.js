
import { AnnotationChart } from "../../Constants/AnnotationChart";
import { activeShape } from "../../Actions/AnnotationAction";
const { ActionTypes } = AnnotationChart;
const initialState = {
    Layers:
        {
            Triangles: [], Channels: [], AText: [], Rectangles: [], Circles: []
        },
    currentActiveShape: null

}

const annotationLayers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ANNOTATION_PARENT_LAYER_SUCCESS:

            return {
                ...state,
                Layers: action.data,
            }
        case ActionTypes.SET_ANNOTATION_TRIANGLES_SUCCESS:

            return {
                ...state,
                Layers: {
                    ...state.Layers,
                    Triangles:
                        [
                            ...action.data
                        ]

                }

            }
        case ActionTypes.SET_ANNOTATION_RECTANGLES_SUCCESS:

            return {
                ...state,
                Layers: {
                    ...state.Layers,
                    Rectangles:
                        [
                            ...action.data
                        ]

                }

            }
        case ActionTypes.SET_ANNOTATION_CIRCLES_SUCCESS:

            return {
                ...state,
                Layers: {
                    ...state.Layers,
                    Circles:
                        [
                            ...action.data
                        ]

                }

            }
        case ActionTypes.SET_ANNOTATION_CHANNELS_SUCCESS:

            return {
                ...state,
                Layers: {
                    ...state.Layers,
                    Channels:
                        {
                            ...state.Layers.Channels,
                            Channels: action.data
                        }
                }

            }
        case ActionTypes.SET_ANNOTATION_TEXT_SUCCESS:

            return {
                ...state,
                Layers: {
                    ...state.Layers,
                    AText:
                        [
                            ...action.data
                        ]

                }

            }
        case ActionTypes.SET_ANNOTATION_ACTIVE_DATA_SUCCESS:

            return {
                ...state,
                currentActiveShape: action.data
            }
        case ActionTypes.HANDLE_CLICK_SUCCESS:

            return {
                ...state,
                currentActiveShape: action.data
            }
        default:
            return state;
    }
}
export default annotationLayers;