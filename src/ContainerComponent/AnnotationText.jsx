import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Text } from 'react-konva';
import Konva, { Group } from 'konva';
import { Triangle } from '../PresentationalComponent';
import { TransformerComponent } from '../PresentationalComponent'
import { initDataLoad, triangleUpdate, activeShape } from "../Actions/AnnotationAction";
import { connect } from 'react-redux';

class AnnotaionText extends PureComponent {

    handleRectChange = (index, newProps) => {

        const rectangles = this.props.shapes.concat();
        rectangles[index] = {
            ...rectangles[index],
            ...newProps
        };
        this.props.triangleUpdate(rectangles);
    };

    render() {

        const Layers = this.props.Layers;
        const selectname = this.props.selectedShapeName;
        const activedialog = this.props.activedialog;
        return (

            Layers.Text.map((rect, i) => (
                < Text
                    x={rect.x}
                    y={rect.y}
                    points={rect.points}
                    stroke={'blue'}
                    strokeWidth={1}
                    closed={true}
                    name={rect.name}
                />
            ))

          
        )
    }
}

const mapStateToProps = ({ annotationStore }) => {
    const { annotationTriangleRed, annotationLayers } = annotationStore;
    const shapes = annotationTriangleRed.shapes;
    const selectedShapeName = annotationTriangleRed.selectedShapeName;
    const Layers = annotationLayers.Layers;
    return ({ shapes, selectedShapeName, Layers });
}

const mapDispatchToProps = (dispatch) => ({
    triangleUpdate: (dim) => dispatch(triangleUpdate(dim)),
    activeShape: (dim) => dispatch(activeShape(dim))
});
export default connect(mapStateToProps, mapDispatchToProps)(AnnotaionText);