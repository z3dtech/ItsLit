import React, { Component } from 'react';
import {List, ListItem } from 'framework7-react';

export default class SensorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('/sensors.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource:responseJson.content.sensors,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
       	<p>LOADING</p>
      );
    }
    if( this.state.dataSource ) {
    	let roomNames = ["Kitchen", "Living Room", "Bed Room"];
    	let i = 0
    	let listItems = this.state.dataSource.map( ( sensor ) => {
    		let key = sensor.arduino_id
    		let link = "sensor/" + sensor.arduino_id
    		let title = roomNames[i]
    		i++
    		return <ListItem key={key} link={link} title={title} />
    	})
	    return (
	     <List>
	     	{listItems}											
		</List>
	    );
	}
  }
}
