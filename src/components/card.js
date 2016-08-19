/*
 * @Author: sussertod
 * @Date:   2016-08-18 12:52:03
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-08-19 15:52:33
 */

'use strict';
import React from 'react';
import theme from '../theme.js';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

class TestCards extends React.Component {
  render() {
    return (
      <Card style={{width: '90%',margin:'0px auto 50px auto'}}>
            <CardTitle avatar="https://placeimg.com/80/80/animals"
                title="Avatar style title"
                subtitle="Subtitle here"
                /><CardMedia aspectRatio = "wide" image = "https://placeimg.com/800/450/nature" />
            <CardTitle title="Title goes here" subtitle="Subtitle here"/>
            <CardText>{dummyText}</CardText>
            <CardActions theme = {theme}>
                <Button label="Action 1"/><Button label = "Action 2"/>
            </CardActions>
      </Card>
    );
  }
}

export default TestCards;
