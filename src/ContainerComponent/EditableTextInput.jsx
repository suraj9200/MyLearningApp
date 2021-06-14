import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { triangleUpdate, activeShape, lineUpdate, activeLine, drawModeActive, TriangleAdd, TextAdd } from "../Actions/AnnotationAction";
class EditableTextInput extends PureComponent {

    componentDidMount() {
        this.inp.focus();
        this.inp.select();
    }

    handleKeyPress = (e) => {
        
        const keyCode = e.which || e.keyCode;
        if (keyCode === 13 && !e.shiftKey) {
            this.props.handleRename(e);
            e.preventDefault();
            e.stopPropagation();
        }
    }
    autosize = (el) => {
        //
        let evt=el.target;
        setTimeout(function(){
           // el.target.style.cssText.height = 'auto';
            //el.target.style.cssText.padding = '0';
          // for box-sizing other than "content-box" use:
          // el.style.cssText = '-moz-box-sizing:content-box';
          evt.style.height = '';
          evt.style.height = evt.scrollHeight + 'px';
          console.log('auto set Height ' + evt.style.height);
          if(evt.value.length==0){
            evt.style.height = '34px';
            console.log('Reset Height ' + evt.style.height);
          }
        },0);
      }
    render() {
        
        return (
            <textarea ref={(r) => this.inp = r} style={{
            overflow:'hidden',
            padding:'7px 10px',
            width:this.props.width,
            height:'34px',
            fontSize:'14px',
            margin:'0 auto',
            display:'block',
            borderRadius:'3px',
            border:'1px solid #666', 
            resize:'none', 
            transition: 'height .1s linear .1s'}}  autoFocus="true" onKeyPress={this.handleKeyPress} onKeyDown={this.autosize}  placeholder={'suraj'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditableTextInput);