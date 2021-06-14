
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import { Stage, Layer, Transformer, Circle, anchorCornerRadius } from 'react-konva';
import Konva from 'konva';


class TransformerComponent extends PureComponent {
    componentDidMount() {
        this.checkNode();
    }

    componentDidUpdate() {
        this.checkNode();
    }

    checkNode() {
        debugger;
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;
        const selectedNode = stage.findOne('.' + selectedShapeName);
        if (selectedNode === this.transformer.node()) {
            return;
        }

        if (selectedNode) {
            this.transformer.attachTo(selectedNode);
        } else {
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }

    render() {

        return (
            <Transformer enabledAnchors={['middle-left','middle-right']} rotateEnabled={false} anchorStroke={'grey'}  anchorFill={'grey'} borderEnabled={false}  anchorCornerRadius={15} anchorSize={10}
                ref={node => {
                    this.transformer = node;
                }}
            />
            // <Transformer enabledAnchors={['middle-left','middle-right']} keepRatio={false}   anchorStroke={'grey'}  anchorFill={'grey'} borderEnabled={false}  anchorCornerRadius={15} anchorSize={10} rotateEnabled={false} bezier={true}

            // ref={node => {
            //         this.transformer = node;
            //     }}
            // />
        );

    }
}

export default TransformerComponent;

// transformer.enabledAnchors(['top-left', 'top-center', 'top-right', 'middle-right', 'middle-left', 'bottom-left', 'bottom-center', 'bottom-right']);