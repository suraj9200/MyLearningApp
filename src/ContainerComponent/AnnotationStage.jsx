import React, { Component, Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnnotaionTraingle from './AnnotaionTraingle.jsx';
import AnnotaionChannel from './AnnotationChannel.jsx';
import { TransformerComponent, Triangle, TextShape, Rectangle, Circle,TextNew } from '../PresentationalComponent'
import { Stage, Layer } from 'react-konva';
// import Konva from 'konva';
import { findIndex } from "underscore";
// import ReactDOM from 'react-dom';
import PortalContainer from './PortalContainer.jsx';
import EditableTextInput from './EditableTextInput.jsx';
import stringUtils from '../StringUtils/stringUtils.js'
import {
    triangleUpdate, activeShape, lineUpdate, activeLine,
    drawModeActive, TriangleAdd, TextAdd, activeShapeData, RectanglesAdd,
    CirclesAdd, handleDragEnd, handleMouseClick
} from "../Actions/AnnotationAction";
import Transformer from './Transformer.jsx'



const toolTipRoot = document.getElementById('portaldiv');
let name, px1 = 0, px2 = 0, px3 = 0, px4 = 0, py1 = 0, py2 = 0, py3 = 0, py4 = 0, points, newHeight = 0, newWidth = 0, newShapes, isSelected, mouseX, mouseY, currShape, selShape;
let cShape = [];
class AnnotationStage extends Component {

    handleClickMouseDown = (e) => {

        const pos = stringUtils.getXandYCordinates(e);
        mouseX = pos.X;
        mouseY = pos.Y;
        isSelected = this.props.activedialog;

        if (this.props.isDrawing) {

            if (this.props.activedialog === 'text') {
                  this.props.currentActiveShape.isEditable = true;
            }
            else {
                this.props.activeShape('');
            }
            this.props.drawModeActive(false);
            document.body.style.cursor = "default";
            return;
        }
        const clickedOnTransformer =
            e.target.getParent() && e.target.getParent().className === 'Transformer';
        if (clickedOnTransformer) {
            return;
        }
        if (e.target === e.target.getStage()) {
            this.props.activeShape('');
        }
        else {
            name = e.target.name();
            this.props.activeShape(name);
            return;
        }

        if (!this.props.isDrawing) {
            document.body.style.cursor = "crosshair";
            this.props.drawModeActive(true);


            if (isSelected === 'triangle')
                this.UpdateTriangleShape(mouseX, mouseY, isSelected);
            else if (isSelected === 'rectangle')
                this.UpdateRectangleShape(mouseX, mouseY, isSelected);

            else if (isSelected === 'circle')
                this.UpdateCircleShape(mouseX, mouseY, isSelected);
            else if (this.props.activedialog === 'text')
                this.UpdateTextShape(mouseX, mouseY, isSelected);
        }
    }

    handleMouseMove = e => {
        const pos = stringUtils.getXandYCordinates(e);
        mouseX = pos.X;
        mouseY = pos.Y;
        isSelected = this.props.activedialog;
        if (this.props.isDrawing) {

            if (isSelected === 'triangle')
                this.UpdateTriangleShape(mouseX, mouseY, isSelected);
            else if (isSelected === 'rectangle')
                this.UpdateRectangleShape(mouseX, mouseY, isSelected);

            else if (isSelected === 'circle')
                this.UpdateCircleShape(mouseX, mouseY, isSelected);

            else if (isSelected === 'text')
                this.UpdateTextShape(mouseX, mouseY, isSelected);
        }
    };

    getCommonShape = (x, y, shape, type) => {

        newShapes = shape.slice();
        name = this.props.selectedShapeName;
        let index = findIndex(shape, function (item) {
            return item.name === name;
        });
        if (index < 0) {
            px1 = 0;
            px2 = 0;
            px3 = 0;
            px4 = 0;
            py1 = 0.;
            py2 = 0;
            py3 = 0;
            py4 = 0;
            // index = index > 0 ? shape.length : 0;
        }
        else {
            currShape = shape[index];
            newWidth = x - currShape.x;
            newHeight = y - currShape.y;
            x = currShape.x;
            y = currShape.y;

            py1 = 0;
            switch (type) {
                case 'rectangle':
                    px1 = 0;
                    px2 = newWidth;
                    py2 = 0;
                    px3 = newWidth;
                    py3 = newHeight;
                    px4 = 0;
                    py4 = newHeight;
                    break;
                case 'triangle':
                    px1 = (newWidth / 2);
                    px2 = newWidth;
                    px3 = 0;
                    py2 = newHeight;
                    py3 = newHeight;
                    break;
                case 'circle':
                    px1 = (newWidth / 2);
                    px2 = newWidth;
                    py2 = newHeight / 2;
                    px3 = newWidth / 2;
                    py3 = newHeight;
                    px4 = 0;
                    py4 = newHeight / 2;
                    break;
                case 'text':
                    px1 = 0;
                    px2 = newWidth;
                    py2 = 0;
                    break;
                default:
            }
        }

        name = index < 0 ? type + '-' + newShapes.length : name;
        points = [{ px1, py1, px2, py2, px3, py3, px4, py4 }];

        if (index < 0) {
            this.props.activeShape('');
            newShapes.push({
                x: x,
                y: y,
                points: points,
                width: 0,
                height: 0,
                name: name,
                type: type,
                stroke: 4,
                isEditable: false,
                isShow: false,
                textwidth: 0,
                textheigth: 0,
            });
        }
        else {
            newShapes[index] = {
                x: x,
                y: y,
                points: points,
                width: newWidth,
                height: newHeight,
                name: name,
                type: type,
                stroke: 4,
                isEditable: false,
                isShow: false,
                textwidth: 0,
                textheigth: 0,
            }
        }
        if (type === 'triangle') {
            this.props.TriangleAdd(newShapes);
        }
        else if (type === 'circle') {
            this.props.CirclesAdd(newShapes);
        }
        else if (type === 'rectangle') {
            this.props.RectanglesAdd(newShapes);
        }
        else {
            this.props.TextAdd(newShapes);
            const currTextShape = this.props.Layers.AText[index];
            this.props.activeShapeData(currTextShape);
        }
        this.props.activeShape(name);
    }

    handleClickMouseUp = e => {

        // if (this.props.activedialog === 'text') {
        //     this.props.currentActiveShape.isEditable = true;
        // }
        // else {
        //     this.props.activeShape('');
        // }
        this.props.drawModeActive(false);
        document.body.style.cursor = "default";
    }

    UpdateTriangleShape = (mouseX, mouseY, isSelected) => {
        selShape = this.props.Layers.Triangles;
        this.getCommonShape(mouseX, mouseY, selShape, isSelected);
    }

    UpdateRectangleShape = (mouseX, mouseY, isSelected) => {

        selShape = this.props.Layers.Rectangles;
        this.getCommonShape(mouseX, mouseY, selShape, isSelected);
    }

    UpdateCircleShape = (mouseX, mouseY, isSelected) => {
        selShape = this.props.Layers.Circles;
        this.getCommonShape(mouseX, mouseY, selShape, isSelected);
    }

    UpdateTextShape = (mouseX, mouseY) => {
        selShape = this.props.Layers.AText;
        this.getCommonShape(mouseX, mouseY, selShape, isSelected);


        // let newShapes = this.props.Layers.AText.slice();
        // name = this.props.selectedShapeName;
        // let index = findIndex(this.props.Layers.AText, function (item) {
        //     return item.name == name;
        // });
        // let currShape = this.props.Layers.AText[index];
        // if (index >= 0) {
        //     const newWidth = mouseX - currShape.x;
        //     const newHeight = mouseY - currShape.y;
        //     px1 = 0;
        //     px2 = newWidth;
        //     py1 = 0;
        //     py2 = newHeight;
        //     points = [{ px1, py1, px2, py2 }];

        //     let currentx =
        //         newShapes[index] = {
        //             x: currShape.x,
        //             y: currShape.y,
        //             points: points,
        //             isEditable: false,
        //             width: newWidth,
        //             height: newHeight,
        //             name: name,
        //             type: 'text',
        //             text: '',
        //             isShow: false
        //         };
        //     this.props.activeShape(name);
        // }
        // else {
        //     index = newShapes.length;
        //     name = 'text-' + newShapes.length;
        //     px1 = 0;
        //     px2 = 0;
        //     py1 = 0;
        //     py2 = 0;

        //     points = [{ px1, py1, px2, py2 }];
        //     newShapes.push({
        //         x: mouseX,
        //         y: mouseY,
        //         points: points,
        //         isEditable: false,
        //         width: 0,
        //         height: 0,
        //         name: name,
        //         type: 'text',
        //         text: '',
        //         isShow: false
        //     });
        //     this.props.activeShape(name);
        // }
        // this.props.TextAdd(newShapes);
        // const currTextShape = this.props.Layers.AText[index];
        // // this.props.activeShapeData(currTextShape);

    }


    handleRename = (e) => {

        const prp = this.props;
        const txtshape = e.target.value.trim();
        const rec = e.target.getClientRects()
        this.props.currentActiveShape.text = txtshape;
        this.props.currentActiveShape.isEditable = false;
        let newShapes = this.props.Layers.AText.slice();
        name = this.props.selectedShapeName;
        let index = findIndex(this.props.Layers.AText, function (item) {
            return item.name == name;
        });
        newShapes[index].text = txtshape;
        newShapes[index].isEditable = false;
        newShapes[index].isShow = true;
        newShapes[index].textwidth = rec.width;
        newShapes[index].textheight = 12;
        this.props.activeShapeData(newShapes);
        this.props.TextAdd(newShapes);
        this.props.activeShape('');
    }

    handleRectChange = (index, newProps) => {
        debugger;
        let trShape = null;
        switch (newProps.type) {
            case 'triangle':
                {
                    trShape = this.props.Layers.Triangles.slice();
                    trShape[index] = {
                        ...trShape[index],
                        ...newProps
                    };
                    this.props.TriangleAdd(trShape);
                }
                break;
            case 'rectangle':
                {
                    trShape = this.props.Layers.Rectangles.slice();
                    // trShape[index].x = newProps.x;
                    // trShape[index].y = newProps.y;
                    // trShape[index].points = newProps.points
                    // trShape[index].width = newProps.width;
                    // trShape[index].height = newProps.height;
                    trShape[index] = {
                        ...trShape[index],
                        ...newProps
                    };
                    this.props.RectanglesAdd(trShape);
                }
                break;
            case 'circle':
                {
                    trShape = this.props.Layers.Circles.concat();
                    // trShape[index].x = newProps.x;
                    // trShape[index].y = newProps.y;
                    // trShape[index].width = newProps.width;
                    // trShape[index].height = newProps.height;
                    trShape[index] = {
                        ...trShape[index],
                        ...newProps
                    };

                    this.props.CirclesAdd(trShape);
                }
                break;
            case 'text':
                {
                    trShape = this.props.Layers.AText.slice();
                    trShape[index] = {
                        ...trShape[index],
                        ...newProps
                    };
                    this.props.TextAdd(trShape);
                }
                break;
            default:

        }

    };

    handleDragEnd = (e) => {

        let selShape;

        const type = e.currentTarget.attrs.type;
        const name = e.currentTarget.attrs.name;
        const index = e.currentTarget.attrs.index;
        if (type === 'triangle') {
            selShape = this.props.Layers.Triangles;
        } else if (type === 'rectangle') {
            selShape = this.props.Layers.Rectangles;
        }
        else {
            selShape = this.props.Layers.Circles;
        }
        const newShapesList = selShape.slice();
        newShapesList[index].x = e.currentTarget.x();
        newShapesList[index].y = e.currentTarget.y();
        this.props.RectanglesAdd(newShapesList);
    }

    render() {
        const Layers = this.props.Layers;
        console.log(Layers);
        const currentData = this.props.currentActiveShape;
        return (
            <Fragment>
                {
                    currentData && currentData.isEditable &&
                    <PortalContainer>
                        <div style={{ position: 'absolute', left: currentData.x, top: currentData.y, width: currentData.width, height: currentData.height }}><EditableTextInput handleRename={this.handleRename} text={currentData.text} width={currentData.width} height={currentData.height} /></div>
                    </PortalContainer>
                }


                <Stage width={window.innerWidth - 266} height={window.innerHeight - 100} 
                    onMouseDown={this.handleClickMouseDown}
                    onContentMouseMove={this.handleMouseMove}
                >
                    <Layer>
                        {Layers.Triangles.length > 0 &&
                            Layers.Triangles.map((tri, i) => (
                                <Triangle
                                    index={i}
                                    key={i}
                                    {...tri}
                                    onTransform={newProps => {
                                        this.handleRectChange(i, newProps);
                                    }}
                                />
                            ))
                        }
                        {
                            Layers.Rectangles.length > 0 &&
                            Layers.Rectangles.map((rect, i) => (
                                <Rectangle
                                    index={i}
                                    handleDragEnd={this.handleDragEnd}
                                    key={i}
                                    {...rect}
                                    onTransform={newProps => {
                                        this.handleRectChange(i, newProps);
                                    }}
                                />
                            ))
                        }
                        {
                            Layers.Circles.length > 0 &&
                            Layers.Circles.map((circ, i) => (
                                <Circle
                                    index={i}
                                    key={i}
                                    {...circ}
                                    onTransform={newProps => {
                                        this.handleRectChange(i, newProps);
                                    }}
                                />
                            ))
                        }
                        {
                            Layers.AText.length > 0 &&
                            Layers.AText.map((txt, i) => (
                                <TextNew
                                    index={i}
                                    key={i}
                                    {...txt}
                                    onTransform={newProps => {
                                        this.handleRectChange(i, newProps);
                                    }}
                                />
                            ))
                        }
                        <TransformerComponent
                            selectedShapeName={this.props.selectedShapeName}
                        />
                        {/* <Transformer selectedShapeName={this.props.selectedShapeName}/> */}
                    </Layer>
                </Stage>
            </Fragment>
        )
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
    const currentActiveShape = annotationLayers.currentActiveShape;
    return ({
        shapes, selectedShapeName, activeShape, lines, selectedLineName, isDrawing, Layers, currentActiveShape
    });
}

const mapDispatchToProps = (dispatch) => ({
    triangleUpdate: (dim) => dispatch(triangleUpdate(dim)),
    activeShape: (dim) => dispatch(activeShape(dim)),
    lineUpdate: (dim) => dispatch(lineUpdate(dim)),
    activeLine: (dim) => dispatch(activeLine(dim)),
    drawModeActive: (dim) => dispatch(drawModeActive(dim)),
    TriangleAdd: (dim) => dispatch(TriangleAdd(dim)),
    TextAdd: (dim) => dispatch(TextAdd(dim)),
    activeShapeData: (dim) => dispatch(activeShapeData(dim)),
    RectanglesAdd: (dim) => dispatch(RectanglesAdd(dim)),
    CirclesAdd: (dim) => dispatch(CirclesAdd(dim)),
    handleDragEnd: (e) => dispatch(handleDragEnd(e)),
    handleMouseClick: (dim) => dispatch(handleMouseClick(dim)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationStage);







