import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Measure from "react-measure";
import { connect } from 'react-redux';
import AnnotaionTraingle from './AnnotaionTraingle.jsx';
import AnnotationStage from './AnnotationStage.jsx';



class AnnotationLeftPanel extends Component {

    render() {
        const activedialog=this.props.activeShape;
        const data=this.props;
        return (
            <div className="annotation-parent a1" >
                <div className="annotation-item annotation-fill-area content annotation-item-grow">
                    <div className="annotation-fill-area-content annotation-item-grow">
                        <AnnotationStage activedialog={activedialog} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ annotationStore }) => {
    const { annotationChart,Annotation } = annotationStore;
    const activeShape = annotationChart.activeShape;
    const parentLayer = Annotation.parentLayer;
    return ({ activeShape,parentLayer });
}

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(AnnotationLeftPanel);