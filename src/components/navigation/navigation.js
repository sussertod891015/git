/*
 * @Author: sussertod
 * @Date:   2016-08-18 15:28:53
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-08-19 15:50:07
 */

'use strict';
import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';
import TestButtons from '../button.js';
import TimePickerTest from '../time.js';
import SwitchTest from '../switch.js';
import SliderTest from '../slider.js';
import RadioTest from '../radio.js';
import TestCards from '../card.js';
import theme from '../../theme.js';
import style from './layout.scss';

const NavigationTest = (props) => (
    <div>
        <Navigation className={style.navigation} type='vertical'>
            <TestButtons {...props} theme={theme} />
            <TimePickerTest {...props} theme={theme} />
            <SwitchTest {...props} theme={theme}></SwitchTest>
            <SliderTest {...props} theme={theme}></SliderTest>
            <RadioTest {...props} theme={theme}></RadioTest>
            <TestCards {...props} theme={theme}></TestCards>
        </Navigation>
    </div>
);
export default NavigationTest;
