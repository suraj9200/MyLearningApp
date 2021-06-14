import {combineReducers} from 'redux';
import annotationStore  from '../Reducers/AnnotationReducer'

const reducers = combineReducers({
    annotationStore: annotationStore
});

export default reducers;
