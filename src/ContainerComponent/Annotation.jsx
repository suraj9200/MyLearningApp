import React, { PureComponent } from "react";
import { connect } from 'react-redux';

import { Grid, Row } from 'react-bootstrap';
import AnnotationLeftPanel from "./AnnotationLeftPanel";
import AnnotationRightPanel from "./AnnotationRightPanel";


class Annotation extends PureComponent {

    render() {
        const activeShape=this.props.activeShape;
        console.log("Start new journey.....")
        return (
            <Grid style={{
                width: '100%',
                height: '100%'
            }}>
                <Row className="show-grid" style={{
                    width: '100%',
                    height: '100%'
                }} >
                    <AnnotationLeftPanel activeShape={activeShape} />
                    <AnnotationRightPanel />
                </Row>
            </Grid>
        )
    }
}
const mapStateToProps = ({ annotationStore }) => {
    const { annotationChart } = annotationStore;
    const activeShape = annotationChart.activeShape;
    return ({ activeShape });
}
const mapDispatchToProps = (dispatch) => ({
  
  });

export default connect(mapStateToProps, mapDispatchToProps)(Annotation);
