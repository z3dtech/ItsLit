import React from 'react';
import PropTypes from 'prop-types';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, Link, NavCenter, NavRight, LoginScreen, LoginScreenTitle, ListButton, FormLabel, FormInput
} from 'framework7-react';

//import NavLeft from 'framework7-react'

import {routes} from '../routes';

const LeftPanel = (props, context) => (
	<Panel left reveal layout="dark">
		<View id="left-panel-view" navbarThrough dynamicNavbar="true">
			{context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
					<ContentBlock inner>
						<p>Left panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

LeftPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar 
						<NavLeft>
							<Link icon="icon-bars" openPanel="left" />
						</NavLeft>
				*/}
				<Navbar>
					<NavCenter sliding>
						Sensors
					</NavCenter>

					<NavRight>
						<Link icon="icon-home" openLoginScreen="#login-screen">
						<img role={"presentation"} style={{width: 60, height: 30}} src={'/logo.png'} />
						</Link>
					</NavRight>
				</Navbar>
				
				{/* Pages */}
				<Pages>
					<Page>					
						<List>
							<ListItem link="sensor/302328sdak23/" title="Living Room"></ListItem>
							<ListItem link="sensor/932934adsf32/" title="Kitchen"></ListItem>							
							<ListItem link="about" title="Bathroom"></ListItem>							
						</List>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};


const onChangeHandler = (event, value) => {
	this.setState({ ...this.state, value: event.target.value})
};


const AppLoginScreen = ( props ) => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>
					<img role={"presentation"} style={{width: 200, height: 100}} src={'/logo.png'} />
						</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>ItsLit ID</FormLabel>
							<FormInput name="subscriber" placeholder="00029833" type="text" onChange={onChangeHandler} />
						</ListItem>
						<ListItem>
							<FormLabel>PIN</FormLabel>
							<FormInput name="pin" type="password" placeholder="****" onChange={onChangeHandler} />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

let currentRoute;

export const getCurrentRoute = () => currentRoute;

export const App = () => (	
	<Framework7App themeType="ios" onRouteChange={route => currentRoute = route} routes={routes}>		
		<Statusbar />		
		<LeftPanel />
		<MainViews />
		<AppLoginScreen />
	</Framework7App>  
);
