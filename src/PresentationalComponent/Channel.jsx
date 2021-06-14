import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Group, Line } from 'react-konva';
import Konva from 'konva';


class Channel extends PureComponent {
    constructor(props) {
        super(props);
    }

    handleChange = e => {
        
        const shape = e.target;
        this.props.onTransform({
            x: shape.x(),
            y: shape.y(),
            width: this.props.width,
            height: this.props.height,
            rotation: shape.rotation(),
            dragOnTop: true,
            draggable: true,
        });
    };


    render() {
        
        const activedialog=this.props.activedialog;
        return (
           
            <Group draggable  >
            
                <Line
                    x={this.props.x}
                    y={this.props.y}
                    points={[this.props.x0, this.props.y0, this.props.x1, this.props.y1]}
                    stroke={'blue'}
                    onDragEnd={this.handleChange}
                    onTransformEnd={this.handleChange}
                    name={this.props.name}
                    ref={"line1"}
                />
                <Line
                    x={this.props.xx}
                    y={this.props.yy}
                    points={[this.props.x0, this.props.y0, this.props.x1, this.props.y1]}
                    stroke={'blue'}
                    onDragEnd={this.handleChange}
                    onTransformEnd={this.handleChange}
                    ref={"line1"}
                />
            </Group>
        );
    }
}

export default Channel;