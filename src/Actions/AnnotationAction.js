import { AnnotationChart } from "../Constants/AnnotationChart";
const { ActionTypes } = AnnotationChart;


export const initDataLoad = () => ({
    type: ActionTypes.INIT_CHART_LOAD,
});

export const onDimensionsChange = (dimension) => 
({
    type: ActionTypes.ON_DIMENSION_CHANGE,
    dimension
});

export const triangleUpdate = (data) => ({
    type: ActionTypes.ON_TRI_SHAPE_ADDED,
    data
});

export const activeShape = (data) => ({
    type: ActionTypes.ON_TRI_SHAPE_ACTIVE,
    data
});
export const drawModeActive = (data) => ({
    type: ActionTypes.ON_DRAWING_MODE,
    data
});

export const lineUpdate = (data) => ({
    type: ActionTypes.ON_LINE_ADDED,
    data
});

export const activeLine = (data) => ({
    type: ActionTypes.ON_LINE_ACTIVE,
    data
});
//On Right Side click
export const activeDrawShape = (data) => ({
    type: ActionTypes.ON_CLICK_ACTIVE_SHAPE,
    data
});
export const addLayerToStage = (data) => ({
    type: ActionTypes.ADD_ANNOTATION_LAYER,
    data:data
});

//Changes Based on Layer
export const shapeUpdate = (data) => ({
    type: ActionTypes.SHAPE_ADDED,
    data
});
export const shapeActive = (data) => ({
    type: ActionTypes.SHAPE_ACTIVE,
    data
});
export const TriangleAdd = (data) => ({
    type: ActionTypes.SET_ANNOTATION_TRIANGLES,
    data
});

export const RectanglesAdd = (data) => ({
    type: ActionTypes.SET_ANNOTATION_RECTANGLES,
    data
});


export const CirclesAdd = (data) => ({
    type: ActionTypes.SET_ANNOTATION_CIRCLES,
    data
});

export const TextAdd = (data) => ({
    type: ActionTypes.SET_ANNOTATION_TEXT,
    data
});

export const activeShapeData = (data) => ({
    type: ActionTypes.SET_ANNOTATION_ACTIVE_DATA,
    data
});

export const handleDragEnd = (e) => ({
    type: ActionTypes.HANDLE_DRAG,
    e
})

export const handleMouseClick = (data) => ({
    type: ActionTypes.HANDLE_CLICK,
    data
});


