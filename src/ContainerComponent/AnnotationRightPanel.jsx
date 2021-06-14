import React, { PureComponent } from 'react'
import { Col } from 'react-bootstrap';
import Measure from "react-measure";
import { connect } from 'react-redux';
import { activeDrawShape, addLayerToStage } from "../Actions/AnnotationAction";
class AnnotationRightPanel extends PureComponent {

    handleTriangle = (e) => {

        const len = this.props.parentLayer.length;
        const Layers = [{
            Layer: [
                {
                    'id': len,
                    'name': 'Layer' + len,
                    'isVisible': true,
                    Shapes: []

                }
            ]
        }];
        this.props.activeDrawShape('triangle');
        this.props.addLayerToStage(Layers);
    }
    handleLine = (e) => {
        this.props.activeDrawShape('channel');
    }
    handleRectangle = (e) => {
        this.props.activeDrawShape('rectangle');
    }
    handleText = (e) => {
        this.props.activeDrawShape('text');
    }
    handleCircle = (e) => {
        this.props.activeDrawShape('circle');
    }
    render() {
        const data = this.props;
        const list = this.props.parentLayer;
        return (
            <div className="annotation-parent a2">
                <div className="annotation-item annotation-fill-area content annotation-item-grow">
                    <div className="annotation-fill-area-content annotation-item-grow">
                        <div onClick={this.handleRectangle} className="rectangle"></div>
                        <div onClick={this.handleCircle} className="circle"></div>
                        <div onClick={this.handleTriangle} className="triangle-up">
                        </div>
                        <div onClick={this.handleLine}>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div onClick={this.handleText}>
                            <i style={{ fontsize: '40' }} className="fa fa-align-justify"></i>
                        </div>
                        <div className="dd-wrapper">
                            <div className="dd-header" onClick={() => this.toggleList()}>
                            </div>
                            {<ul className="dd-list">
                                {list.map((items, i) => (

                                    items.Layer.map((item1, j) => (

                                        < li className="dd-list-item" key={item1.id} > {item1.name}</li>
                                    ))
                                ))}
                            </ul>}
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
const mapStateToProps = ({ annotationStore }) => {
    const { annotationChart, Annotation } = annotationStore;
    const parentLayer = Annotation.parentLayer;
    return ({ parentLayer });
}

const mapDispatchToProps = (dispatch) => ({
    activeDrawShape: (dim) => dispatch(activeDrawShape(dim)),
    addLayerToStage: (dim) => dispatch(addLayerToStage(dim))
});


export default connect(mapStateToProps, mapDispatchToProps)(AnnotationRightPanel);