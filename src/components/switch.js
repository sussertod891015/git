/*
 * @Author: sussertod
 * @Date:   2016-08-18 12:18:41
 * @Last Modified by:   sussertod
 * @Last Modified time: 2016-08-18 12:24:38
 */

'use strict';

import React from 'react';
import Switch from 'react-toolbox/lib/switch';

class SwitchTest extends React.Component {
  state = {
    switch_1: true,
    switch_2: false,
    switch_3: true
  };

  handleChange = (field, value) => {
    this.setState({...this.state,
      [field]: value
    });
  };

  render() {
    return (
      <section>
        <Switch
          checked={this.state.switch_1}
          label="Push notifications"
          onChange={this.handleChange.bind(this, 'switch_1')}
        />
        <Switch
          checked={this.state.switch_2}
          label="Mail notifications"
          onChange={this.handleChange.bind(this, 'switch_2')}
        />
        <Switch
          checked={this.state.switch_3}
          disabled
          label="Nothing, thanks"
          onChange={this.handleChange.bind(this, 'switch_3')}
        />
      </section>
    );
  }
}

export default SwitchTest;
