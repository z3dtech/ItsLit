import React from 'react';
import {getCurrentRoute} from '../App'
//import SensorData from './SensorData'
import { Page, ContentBlock, Navbar, List, ListItem } from 'framework7-react';


export class Sensor extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
          isLoadingHistory: true,
          sensorHistory: false
        }
    }
    componentDidMount() {
        let route = getCurrentRoute()
        let sensorId = route.params.id

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
    render( ) {
         let route = getCurrentRoute()
          
        if (this.state.isLoadingHistory || false ) {
          return (
            <p>LOADING</p>
          );
        } else {
            let route = getCurrentRoute()
           
            let listItems = this.state.sensorHistory.map( ( sensor ) => {
            let status = 'GOOD'
                if( parseInt( sensor.content.alarm ) !== 0 ) {
                  status = 'FIRE!'
                }
                let datetime = new Date( sensor.createdAt )
                let time = datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds()
                status = status + ' -- ' + time
                return <ListItem key={sensor['_id']} title={status} subtitle={time}></ListItem>
            })
            return (
                <Page>
                    <Navbar title="Room" backLink="Back" sliding />
                    <ContentBlock inner>
                        <p>Here are the logs for Sensor {route.params.id}!</p>
                        
                         <List>
                            {{listItems}}                                    
                        </List>

                    </ContentBlock>
                </Page>
            );
        }
    }
};
