import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Rect, RegularPolygon, Group, Line } from 'react-konva';
import Konva from 'konva';
import { connect } from 'react-redux';

class ShapeDialog extends PureComponent {
    constructor(props) {
        super(props);
    }

    handleChange = e => {
        const shape = e.target;

        this.props.onTransform({
            x: shape.x(),
            y: shape.y(),
            width: this.props.width,
            height: this.props.height70,
            rotation: shape.rotation(),
            dragOnTop: true,
            draggable: false,
            radius: shape.radius(50),
            name: this.props.name
        });
    };


    render() {
        
        const activedialog = this.props.activedialog;
        const shape = this.props.shapes;
        const channel = this.props.channel;
        return (

            shape.map((rect, i) => {

                rect.triangle.map((rect, i) => (
                    <Line
                        x={this.props.x}
                        y={this.props.y}
                        sides={3}
                        radius={89}
                        stroke='blue'
                        onDragEnd={this.handleChange}
                        onTransformEnd={this.handleChange}
                        name={this.props.name}
                        draggable
                    />
                ))

                rect.channel.map((rect, i) => (
                    <Group draggable  >
                        <Line
                            x={this.props.x}
                            y={this.props.y}
                            points={[this.props.x0, this.props.y0, this.props.x1, this.props.y1]}
                            stroke={'blue'}
                            onDragEnd={this.handleChange}
                            onTransformEnd={this.handleChange}
                            name={this.props.name}
                        />
                        <Line
                            x={this.props.xx}
                            y={this.props.yy}
                            points={[this.props.x0, this.props.y0, this.props.x1, this.props.y1]}
                            stroke={'blue'}
                            onDragEnd={this.handleChange}
                            onTransformEnd={this.handleChange}
                        />
                    </Group>
                ))
            })
            //  channel.map((rect, i) => (
            //                         <Group draggable  >

            //                             <Line
            //                                 x={this.props.x}
            //                                 y={this.props.y}
            //                                 points={[this.props.x0, this.props.y0, this.props.x1, this.props.y1]}
            //                                 stroke={'blue'}
            //                                 onDragEnd={this.handleChange}
            //                                 onTransformEnd={this.handleChange}
            //                                 name={this.props.name}
            //                                 ref={"line1"}
            //                             />
            //                             <Line
            //                                 x={this.props.xx}
            //                                 y={this.props.yy}
            //                                 points={[this.props.x0, this.props.y0, this.props.x1, this.props.y1]}
            //                                 stroke={'blue'}
            //                                 onDragEnd={this.handleChange}
            //                                 onTransformEnd={this.handleChange}
            //                                 ref={"line1"}
            //                             />
            //                         </Group>
            //                     ))
        );
    }
}

const mapStateToProps = ({ annotationStore }) => {
    const { annotationShapeStore, } = annotationStore;
    const shapes = annotationShapeStore.shapes;
    // const selectedShapeName = annotationTriangleRed.selectedShapeName;
    return ({ shapes });
}

const mapDispatchToProps = (dispatch) => ({
    // triangleUpdate: (dim) => dispatch(triangleUpdate(dim)),
    // activeShape: (dim) => dispatch(activeShape(dim))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShapeDialog);