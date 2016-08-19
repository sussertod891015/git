/*
 * @Author: sussertod
 * @Date:   2016-08-18 12:12:16
 * @Last Modified by:   sussertod
 * @Last Modified time: 2016-08-18 15:11:31
 */

'use strict';

import React from 'react';
import TimePicker from 'react-toolbox/lib/time_picker';

let time = new Date();
time.setHours(17);
time.setMinutes(28);

class TimePickerTest extends React.Component {
    state = {
        time
    };

    handleChange = (time) => {
        this.setState({
            time
        });
    };

    render() {
        return (
            <TimePicker label='Finishing time' style={{width: '90%',margin:'0px auto 50px auto'}}  onChange={this.handleChange} value={this.state.time}/>
        );
    }
}

export default TimePickerTest;
