import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Rect, Group } from 'react-konva';
import Konva from 'konva';
import TransformerComponent from './TransformerComponent.jsx';



class Rectangle extends PureComponent {

    handleChange = e => {
       
        let px1 = 0, px2 = 0, px3 = 0, px4 = 0, py1 = 0, py2 = 0, py3 = 0, py4 = 0, points;

        const shape = e.target;
        let nwidth = shape.width() * shape.scaleX();
        let nheight = shape.height() * shape.scaleY();
        px1 = 0;
        py1 = 0;
        px2 = nwidth;
        py2 = 0;
        px3 = nwidth;
        py3 = nheight;
        px4 = 0;
        py4 = nheight;

        points = [{ px1, py1, px2, py2, px3, py3, px4, py4 }];
        this.props.onTransform({
            x: shape.x(),
            y: shape.y(),
            width: nwidth,
            height: nheight,
            name: shape.name(),
            points: points
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
        ;
        this.props.handleDragEnd(e);
    }

    render() {
        debugger;
        return (
            <Rect
                x={this.props.x}
                y={this.props.y}
                stroke={'yellow'}
                width={this.props.width}
                height={this.props.height}
                points={[this.props.points[0].px1, this.props.points[0].py1, this.props.points[0].px2, this.props.points[0].py2, this.props.points[0].px3, this.props.points[0].py3, this.props.points[0].px4, this.props.points[0].py4]}
                strokeWidth={this.props.stroke}
                strokeScaleEnabled={false}
                closed={true}
                name={this.props.name}
                type={this.props.type}
                onDragEnd={this.handleDragEnd}
                onTransformEnd={this.handleChange}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                // fill={'yellow'}
                fill={"rgb(255, 0, 0,0.3)"}
                // opacity={0.7}
                dash={[10, 5]}
                dashEnabled={true}
                draggable
                index={this.props.index}
                ref={(node) => {
                    this.rect = node;
                }}
            />
        );
    }
}

export default Rectangle;