import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Group, Text, Line, Rect, Layer, shape, Shape } from 'react-konva';
import Konva from 'konva';

class TextShape extends PureComponent {
    constructor(props) {
        super(props);
    }
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
        // const shape = e.target;
        // this.props.onTransform({
        //     x: shape.x(),
        //     y: shape.y(),
        //     width: shape.width() * shape.scaleX(),
        //     height: shape.height() * shape.scaleY(),
        //     textwidth: shape.width() - 20,
        //     textheight: 12,
        //     name: shape.name(),
        //     strokeWidth: shape.stroke()
        // });
    };
    render() {
        debugger;
        return (
            // <Line
            //     x={this.props.x}
            //     y={this.props.y}
            //     points={[this.props.points[0].px1, this.props.points[0].py1, this.props.points[0].px2, this.props.points[0].py2]}
            //     stroke={'blue'}
            //     strokeWidth={10}
            //     fill={'red'}
            //     closed={true}
            //     name={this.props.name}
            //     strokeScaleEnabled={false}
            //     draggable
            //     bezier={false}
            //     offset={2}
            //     onTransformEnd={this.handleChange}
            //     onMouseEnter={this.handleMouseEnter}
            //     onMouseLeave={this.handleMouseLeave}
            //     type={this.props.type}
            //     index={this.props.index}
            //     ref={(node) => {
            //         this.rect = node;
            //     }}
            // />
            <Group draggable  >

                {
                    //  !this.props.isEditable &&
                    <Line
                        x={this.props.x}
                        y={this.props.y}
                        points={[this.props.points[0].px1, this.props.points[0].py1, this.props.points[0].px2, this.props.points[0].py2]}
                        stroke={'blue'}
                        strokeWidth={10}
                        fill={'red'}
                        closed={true}
                        name={this.props.name}
                        strokeScaleEnabled={false}
                        draggable
                        bezier={false}
                        offset={2}
                        onTransformEnd={this.handleChange}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        ref={(node) => {
                            this.rect = node;
                        }}
                    // lineJoin={'round'}
                    // onTransformEnd={this.handleChange}
                    // visible={!this.props.isEditable}
                    />
                }

                <Rect
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
                />
                <Text
                    x={this.props.x}
                    y={this.props.y}
                    visible={this.props.isShow}
                    text={this.props.text}
                    name={this.props.name}
                    width={this.props.width}
                    stroke='blue'
                    height={this.props.height}
                    strokeWidth={1}
                    fontSize={12}
                    onTransformEnd={this.handleChange}
                    onMouseEnter={this.handleHover}
                    onTouchStart={this.handleHover}
                />
            </Group>


        );
    }
}

export default TextShape;


