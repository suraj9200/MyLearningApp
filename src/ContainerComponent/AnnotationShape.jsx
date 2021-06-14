import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Stage, Layer, RegularPolygon } from 'react-konva';
import Konva, { Group } from 'konva';
import { ShapeDialog } from '../PresentationalComponent';
import { TransformerComponent } from '../PresentationalComponent'
import { initDataLoad, triangleUpdate, activeShape,shapeUpdate } from "../Actions/AnnotationAction";
import { connect } from 'react-redux';

class AnnotaionShape extends PureComponent {

    handleRectChange = (index, newProps) => {
        const rectangles = this.props.shapes.concat();
        rectangles[index] = {
            ...rectangles[index],
            ...newProps
        };
        this.props.shapeUpdate(rectangles);
    };

    render() {
      
        const shape = this.props.shapes;
        // const selectname = this.props.selectedShapeName;
        const activedialog = this.props.activedialog;
        return (

            // shape.map((rect, i) => (
                <ShapeDialog
                    // activedialog={activedialog}
                    // key={i}
                    // {...rect}
                    // onTransform={newProps => {
                    //     this.handleRectChange(i, newProps);
                    // }}
                />
            // ))
        )
    }
}

const mapStateToProps = ({ annotationStore }) => {
     const { annotationShapeStore } = annotationStore;
     const shapes = annotationShapeStore.shapes;
    // const selectedShapeName = annotationTriangleRed.selectedShapeName;
    return ({ shapes });
}

const mapDispatchToProps = (dispatch) => ({
    // triangleUpdate: (dim) => dispatch(triangleUpdate(dim)),
    // activeShape: (dim) => dispatch(activeShape(dim))
});
export default connect(mapStateToProps, mapDispatchToProps)(AnnotaionShape);