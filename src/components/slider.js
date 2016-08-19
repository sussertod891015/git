/*
 * @Author: sussertod
 * @Date:   2016-08-18 12:28:57
 * @Last Modified by:   sussertod
 * @Last Modified time: 2016-08-18 12:32:26
 */

'use strict';

import React from 'react';
import Slider from 'react-toolbox/lib/slider';

class SliderTest extends React.Component {
    state = {
        slider2: 5,
        slider3: 1
    };

    handleChange = (slider, value) => {
        const newState = {};
        newState[slider] = value;
        this.setState(newState);
    };

    render() {
        return (
            <section>
                <p>Normal slider</p>
                <Slider value={this.state.slider1} onChange={this.handleChange.bind(this, 'slider1')} />
                <p>With steps, initial value and editable</p>
                <Slider min={0} max={10} editable value={this.state.slider2} onChange={this.handleChange.bind(this, 'slider2')} />
                <p>Pinned and with snaps</p>
                <Slider pinned snaps min={0} max={10} step={1} editable value={this.state.slider3} onChange={this.handleChange.bind(this, 'slider3')} />
            </section>
        );
    }
}

export default SliderTest;
