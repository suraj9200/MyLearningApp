import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EditableTextInput from './EditableTextInput.jsx';
import { connect } from 'react-redux';
import { triangleUpdate, activeShape, lineUpdate, activeLine, drawModeActive, TriangleAdd, TextAdd } from "../Actions/AnnotationAction";
import ReactDOM from 'react-dom';

const toolTipRoot = document.getElementById('portaldiv');
class PortalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.el = this.props.isCustomColumnFilter ? toolTipRoot : document.createElement('div');
    }

    componentDidMount() {
        !this.props.isCustomColumnFilter && toolTipRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        !this.props.isCustomColumnFilter && toolTipRoot.removeChild(this.el);
    }


    render() {
        return (
            ReactDOM.createPortal(
                this.props.children,
                this.el
            )
        );
    }
}

const mapStateToProps = ({ annotationStore }) => {
    const { annotationTriangleRed, annotationChart, annotationLine, AnnotationStage, Annotation, annotationLayers } = annotationStore;
    const shapes = annotationTriangleRed.shapes;
    const selectedShapeName = annotationTriangleRed.selectedShapeName;
    const activeShape = annotationChart.activeShape;
    const lines = annotationLine.lines;
    const selectedLineName = annotationLine.selectedLineName;
    const isDrawing = Annotation.isDrawing;
    const Layers = annotationLayers.Layers;
    return ({
        shapes, selectedShapeName, activeShape, lines, selectedLineName, isDrawing, Layers
    });
}

const mapDispatchToProps = (dispatch) => ({
    triangleUpdate: (dim) => dispatch(triangleUpdate(dim)),
    activeShape: (dim) => dispatch(activeShape(dim)),
    lineUpdate: (dim) => dispatch(lineUpdate(dim)),
    activeLine: (dim) => dispatch(activeLine(dim)),
    drawModeActive: (dim) => dispatch(drawModeActive(dim)),
    TriangleAdd: (dim) => dispatch(TriangleAdd(dim)),
    TextAdd: (dim) => dispatch(TextAdd(dim))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortalContainer);