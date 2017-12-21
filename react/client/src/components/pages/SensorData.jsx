import React, { Component } from 'react';
import {getCurrentRoute} from '../App'
import { List, ListItem } from 'framework7-react';

export default class SensorData extends Component {
   constructor(props) {
      console.log( "Sensor Data" )
        super(props);
        this.state = {
          isLoadingHistory: true
        }
    }
    componentDidMount() {
        let route = getCurrentRoute()
        let sensorId = route.params.id
        if( this.state.isLoadingHistory ) {
               return fetch('/sensor.json/'+sensorId)
                            .then((response) => response.json())
                            .then((responseJson) => {
                            console.log( responseJson )
                            this.setState({
                              isLoadingHistory: false,
                              sensorHistory: responseJson
                            }, function() {
                              // do something with new state
                            });
                        }).catch((error) => {
                            console.error(error);
                        })
            }
        }
    render( ) {
        if (this.state.isLoadingHistory) {
          return (
            <p>LOADING</p>
          );
        } else {
            let route = getCurrentRoute()
            
            let listItems = this.state.sensorHistory.map( ( sensor ) => {
              let img = '/images/good.png'
                if( parseInt( sensor.content.alarm ) !== 0 ) {
                  img = '/images/fire.png'
                }
                let datetime = new Date( sensor.createdAt )
                let time = datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
                 return <ListItem key={sensor['_id']} media={img} title={time}></ListItem>
                }
            })

            return (
                {listItems}                                         
            )
        }
    }
};
