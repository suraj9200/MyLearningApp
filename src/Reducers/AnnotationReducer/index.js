import { combineReducers } from 'redux';
import Annotation from './Annotation';

import annotationLayers from './annotationLayers';
import annotationChart from './annotationChart';
import annotationTriangleRed from './annotationTriangleRed';
import annotationLine from './annotationLine';
import annotationShapeStore from './annotationShapeStore';
const annotationStore = combineReducers({
    Annotation,
    annotationLayers,
   
    annotationChart,
    annotationTriangleRed,
    annotationLine,
    annotationShapeStore,

});

export default annotationStore;