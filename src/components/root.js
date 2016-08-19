/*
 * @Author: Sussertod
 * @Date:   2016-08-19 15:00:34
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-08-19 15:47:35
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
    AppBar
} from 'react-toolbox/lib/app_bar';
import theme from '../theme.js';
import AppBarTest from './appBar/appbar.js';
import NavigationTest from './navigation/navigation.js';

const Root = (props) => (
    <div>
        <AppBarTest {...props} theme={theme}></AppBarTest>
        <NavigationTest {...props} theme={theme}></NavigationTest>
    </div>

);

export default Root;
