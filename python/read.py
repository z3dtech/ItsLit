import serial
import serial.tools.list_ports
import json
import multiprocessing
import sys
from time import sleep
from time import time
from StoPy import StoPy

arduino_alarms = {} # global list of alarms and their active status 
secret = json.loads( open( './secret.json', 'r' ).read() )
sto = StoPy.StoPy( secret['url'], secret['port'], secret['api_key'] ) # API wrapepr object
reads_per_calibration = 40

def getPiId(): # this function generates an ID for the Pi MCU
	cpuserial = "0000000000000000"
	try:
		f = open('/proc/cpuinfo','r')
		for line in f:
			if line[0:6]=='Serial':
				cpuserial = line[10:26]
		f.close()
	except:
		cpuserial = "ERROR000000000"	
	return "MCU-" + cpuserial


def getArduinoPorts(): # this function scans all USB ports for arduino connections and stores them
	arduinos = []
	arduino_labels = ('Arduino', 'FT231X')
	ports = list( serial.tools.list_ports.comports() )
	for p in ports:
	    if any( s in p.description for s in arduino_labels ):
	    	arduinos.append( {'port': p[0], 'arduino_id': p.serial_number } )
	    	arduino_alarms[ p.serial_number ] = False
	return arduinos


def parseInput( arduino ): # this function interfaces with an individual arduino
	print( "re-calibrating arduino connection" )
	print( arduino )
	listen = 9600
	upload = { 'collection': getPiId(), 'owner': arduino['arduino_id'] } # prepare for request
	i = 0
	except_counter = 0 #reset exception counter per individual calibration
	port = arduino['port']
	try:
		ser = serial.Serial( port, listen, timeout=15 ) #open
		while i < reads_per_calibration: 
			try: 
				lines = ser.read(255).split("\n") #read data
				upload['data'] = json.loads( lines[len(lines)-2] ) #parse data
				upload['data']['time'] = int(time()) #addd time
				print( upload ) #check format
				print( sto.insert(upload['collection'], upload['owner'], upload['data']) ) #save/upload data

				# if an alarm is triggered by a sensor, set off alarms for all other connected sensors -->
				# fog fog fog
				if int( upload['data']['alarm'] ) > 0:
					arduino_alarms[ arduino['arduino_id'] ] = True
				else:
					arduino_alarms[ arduino['arduino_id'] ] = False
				
				#print( 'Alarm Level ' + str( alarm_data['alarm'] ) )
				print( arduino_alarms )
				#handle external fog triggers
				if arduino_alarms[ arduino['arduino_id'] ] == False and any( active == True for active in arduino_alarms.values() ):
					ser.write("REMOTE ALARM TRIGGER") # this sets of the alarm
				i += 1 #iterate count
			except ValueError:  # includes simplejson.decoder.JSONDecodeError
				print 'Decoding JSON has failed'
				arduino_alarms[ arduino['arduino_id'] ] = False # stop remote triggers on bad read
				except_counter +=1
				if except_counter == 10:
					break
			except serial.serialutil.SerialException: #handle serial disconnect/failure
				print 'Serial Issue - Read'
				arduino_alarms[ arduino['arduino_id'] ] = False # stop remote triggers on disconnect
				except_counter +=1
				if except_counter == 4:
					break
				sleep(15)
		
		ser.flushInput()
		ser.close()
	except serial.serialutil.SerialException:
			print 'Serial Issue - Flush'
			except_counter +=1
			if except_counter == 4:
				return False
			sleep(15)
	return True

except_counter = 0		
try: # listen to each arduino
	arduinos_list = getArduinoPorts()
	print( sto.insert( 'sensors', getPiId(), { 'sensors': arduinos_list } ) ) #save/upload data
	p = multiprocessing.Pool(len(arduinos_list))
	if len(arduinos_list) < 128:
		while True:
			p.map_async( parseInput, arduinos_list )
			sleep(60)
except (KeyboardInterrupt, SystemExit):
	print( "Process Ended" )
	p.terminate()
	sys.exit()