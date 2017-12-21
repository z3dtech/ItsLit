const express = require('express');
const router = express.Router();
const request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const SensorListData = function ( systemId ) {
	return new Promise( (res, rej ) => {
		try {
			request.get({
				headers: {
					authorization: "Basic api_key=cbab68f9e00f1ffc58f198e042064d54"
				},
				url: 'https://itslit-api.z3d.tech/v1/sensors/last/' + systemId,
				json: true
			}, (err,resp) => {
				if( resp.body && resp.body.data ) {	
					res(resp.body.data)
				} else {
					rej( "ERROR ACCESSING SERVER" )
				}
			})	
		} catch (error) {
			console.error(error);
			rej( error )
		}
	} )
	
}

const SensorHistoryData = function ( sensorId, systemId='MCU-0000000000000000' ) {
	return new Promise( (res, rej ) => {
		try {
			request.get({
				headers: {
					authorization: "Basic api_key=cbab68f9e00f1ffc58f198e042064d54"
				},
				url: 'https://itslit-api.z3d.tech/v1/'+systemId+'/last/' + sensorId + '/10',
				json: true
			}, (err,resp) => {
				if( resp.body && resp.body.data ) {	
					res(resp.body.data)
				} else {
					rej( "ERROR ACCESSING SERVER" )
				}
			})	
		} catch (error) {
			console.error(error);
			rej( error )
		}
	} )
	
}


router.get('/sensors.json', function( req, res, next) {
	SensorListData('MCU-0000000000000000').then( ( dataset ) => {
		res.send( dataset )
	} ).catch( (err) => {
		res.send({'error': 'error loading sensors'})
	})
} )

router.get('/sensor.json/:sensorId', function( req, res, next) {
	SensorHistoryData( req.params.sensorId ).then( ( dataset ) => {
		res.send( dataset )
	} ).catch( (err) => {
		res.send({'error': 'error loading sensors'})
	})
} )

module.exports = router;
