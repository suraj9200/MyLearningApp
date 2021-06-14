import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { RegularPolygon, Group, Line } from 'react-konva';
import Konva from 'konva';
import TransformerComponent from './TransformerComponent.jsx'


class Circle extends PureComponent {



    handleChange = e => {
        
        const shape = e.target;
        this.props.onTransform({
            x: shape.x(),
            y: shape.y(),
            width: shape.width() * shape.scaleX(),
            height: shape.height() * shape.scaleY(),
            name: shape.name(),
            strokeWidth:shape.stroke

        });
    };

    handleMouseEnter = (event) => {
        
        const shape = event.target;
        shape.getStage().container().style.cursor = 'pointer';
        this.rect.getLayer().draw();
    };

    handleMouseLeave = (event) => {
        const shape = event.target;
        shape.getStage().container().style.cursor = 'crosshair';
        this.rect.getLayer().draw();
    };
    handleDragEnd = (e) => {
        this.props.handleDragEnd(e);
    }

    render() {

        return (
            <Line
                x={this.props.x}
                y={this.props.y}
                points={[this.props.points[0].px1, this.props.points[0].py1, this.props.points[0].px2, this.props.points[0].py2, this.props.points[0].px3, this.props.points[0].py3,this.props.points[0].px4,this.props.points[0].py4]}
                stroke={'red'}
                width={this.props.width}
                height={this.props.height}
                strokeWidth={this.props.stroke}
                closed={true}
                index={this.props.index}
                name={this.props.name}
                type={this.props.type}
                onDragEnd={this.handleDragEnd}
                onTransformEnd={this.handleChange}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                tension={0.55}
                draggable
                ref={(node) => {
                    this.rect = node;
                }}
            />
        );
    }
}

export default Circle ;