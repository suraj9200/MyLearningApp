import React, { Component } from 'react';
import { Group, Circle } from 'react-konva';

class Transformer extends Component {

    render() {
        const { position, x, y} = this.props;

        return (
            <Group>
                <Circle
                    position={position}
                    x={x}
                    y={y}
                    radius={8}
                    stroke='black'
                    strokeWidth={2}
                    draggable
                    onDragEnd={this.handleDragEnd}
                />
            </Group>
        );
    }
}

export default Transformer