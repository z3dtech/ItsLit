import React from 'react';
import {Page, ContentBlock, Navbar} from 'framework7-react';
import {getCurrentRoute} from '../App'

export class Sensor extends React.Component {
    render( ) {
        let route = getCurrentRoute()
        return (
            <Page>
                <Navbar title="Room" backLink="Back" sliding />
                <ContentBlock inner>
                    <p>Here is Room page for Room {route.params.id}!</p>
                    <p>You can edit the label for a room, see current air quality stats, and see a running history.</p>
                    <p> <f7-link back>back</f7-link>.</p>
                </ContentBlock>
            </Page>
        );
    }
};
