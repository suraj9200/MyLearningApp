import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Group, Text, Line, Rect, Layer, shape, Shape } from 'react-konva';
import Konva from 'konva';
import TransformerComponent from './TransformerComponent.jsx';



class TextNew extends PureComponent {

    handleChange = e => {
        debugger;
        const shape = e.target;
        this.props.onTransform({
            x: shape.x(),
            y: shape.y(),
            width: shape.width() * shape.scaleX(),
            height: shape.height() * shape.scaleY(),
            name: shape.name(),
            type: shape.attrs.type,
            strokeWidth: shape.stroke
        });

        // let px1 = 0, px2 = 0, px3 = 0, px4 = 0, py1 = 0, py2 = 0, py3 = 0, py4 = 0, points;

        // const shape = e.target;
        // let nwidth = shape.width() * shape.scaleX();
        // px1 = 0;
        // py1 = 0;
        // px2 = nwidth;
        // py2 = 0;
        // px3 = 0;
        // py3 = 0;
        // px4 = 0;
        // py4 = 0;

        // points = [{ px1, py1, px2, py2, px3, py3, px4, py4 }];
        // this.props.onTransform({
        //     x: shape.x(),
        //     y: shape.y(),
        //     width: nwidth,
        //     height: 0,
        //     name: shape.name(),
        //     points: points
        // });
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

    // handleDragEnd = (e) => {

    //     this.props.handleDragEnd(e);
    // }

    render() {
        debugger;
        return (
            <Group >
                { 
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        // points={[this.props.points[0].px1, this.props.points[0].py1, this.props.points[0].px2, this.props.points[0].py2]}
                        stroke={'blue'}
                        strokeWidth={2}
                        fill={'red'}
                        visible={!this.props.isEditable}
                        // closed={true}
                        width={this.props.width}
                        height={20}
                        name={this.props.name}
                        strokeScaleEnabled={false}
                        draggable
                        bezier={false}
                        offset={2}
                        onTransformEnd={this.handleChange}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        type={this.props.type}
                        ref={(node) => {
                            this.rect = node;
                        }}
                    />
                }
                {/* <Rect
                    x={this.props.x}
                    y={this.props.y}
                    points={[this.props.points[0].px1, this.props.points[0].py1, this.props.points[0].px2, this.props.points[0].py2]}
                    visible={this.props.isShow}
                    name={this.props.name}
                    width={this.props.width}
                    height={30}
                    stroke='blue'
                    strokeWidth={1}
                    fill={'black'}
                    onMouseEnter={this.handleHover}
                    onTouchStart={this.handleHover}
                    onTransformEnd={this.handleChange}
                    onMouseOut={this.handlerOut}
                /> */}
                <Text
                    x={this.props.x}
                    y={this.props.y}
                    visible={this.props.isShow}
                    text={this.props.text}
                    name={this.props.name}
                    width={this.props.width}
                    stroke='blue'
                    height={20}
                    strokeWidth={1}
                    fontSize={12}
                    onTransformEnd={this.handleChange}
                    onMouseEnter={this.handleHover}
                    onTouchStart={this.handleHover}
                    verticalAlign={"middle"}
                />
            </Group>
        );
    }
}

export default TextNew;