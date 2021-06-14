import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';
import Konva from 'konva';
import { lineUpdate, activeLine } from "../Actions/AnnotationAction";
import { Channel } from '../PresentationalComponent';
import { connect } from 'react-redux';
class AnnotationChannel extends PureComponent {

    handleRectChange = (index, newProps) => {
        const rectangles = this.props.lines.concat();
        rectangles[index] = {
            ...rectangles[index],
            ...newProps
        };
        this.props.lineUpdate(rectangles);
    };

    render() {
        const lines = this.props.lines;
        const selectedLineName = this.props.selectedLineName;
        const activedialog = this.props.activedialog;
        return (
            lines.map((rect, i) => (
                <Channel
                    activedialog={activedialog}
                    key={i}
                    {...rect}
                    onTransform={newProps => {
                        this.handleRectChange(i, newProps);
                    }}
                />
            ))
        )
    }
}


const mapStateToProps = ({ annotationStore }) => {
    const { annotationLine } = annotationStore;
    const lines = annotationLine.lines;
    const selectedLineName = annotationLine.selectedLineName;
    return ({ lines, selectedLineName });
}

const mapDispatchToProps = (dispatch) => ({
    lineUpdate: (dim) => dispatch(lineUpdate(dim)),
    activeLine: (dim) => dispatch(activeLine(dim))
});
export default connect(mapStateToProps, mapDispatchToProps)(AnnotationChannel);