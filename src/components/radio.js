/*
 * @Author: sussertod
 * @Date:   2016-08-18 12:46:21
 * @Last Modified by:   sussertod
 * @Last Modified time: 2016-08-18 12:47:11
 */

'use strict';
import React from 'react';
import {
    RadioGroup,
    RadioButton
} from 'react-toolbox/lib/radio';

class RadioTest extends React.Component {
    state = {
        value: 'vvendetta'
    };

    handleChange = (value) => {
        this.setState({
            value
        });
    };

    render() {
        return (
            <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
                <RadioButton label='The Walking Dead' value='thewalkingdead'/>
                <RadioButton label='From Hell' value='fromhell' disabled/>
                <RadioButton label='V for a Vendetta' value='vvendetta'/>
                <RadioButton label='Watchmen' value='watchmen'/>
            </RadioGroup>
        );
    }
}

export default RadioTest;
