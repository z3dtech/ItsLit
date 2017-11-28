import serial
import serial.tools.list_ports
import json
from time import sleep
from time import time
from StoPy import StoPy
from multiprocessing import Pool

sto = StoPy.StoPy( "localhost", "8080", "cbab68f9e00f1ffc58f198e042064d54" ) 
arduino_alarms = {"otherAlarm": True}

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
	return arduinos


def parseInput( arduino, listen=9600 ): # this function interfaces with an individual arduino
	print( "re-calibrating arduino connection" )
	print(arduino)
	upload = { 'collection': getPiId(), 'owner': arduino['arduino_id'] } # prepare for request
	i = 0
	except_counter = 0 #reset exception counter per individual calibration
	port = arduino['port']
	try:
		ser = serial.Serial( port, listen, timeout=15 ) #open
		while i < 10: #10 reads per calibration
			try: 
				lines = ser.read(255).split("\n") #read data
				upload['data'] = json.loads( lines[len(lines)-2] ) #parse data
				upload['data']['time'] = int(time()) #addd time
				print( upload ) #check format
			#	print( sto.insert(upload['collection'], upload['owner'], upload['data']) ) #save/upload data
				# send our data up to fog triggers
				if int( upload['data']['alarm'] ) > 0:
					arduino_alarms[ arduino['arduino_id'] ] = True
				else:
					arduino_alarms[ arduino['arduino_id'] ] = False
				#handle external fog triggers
				if arduino_alarms[ arduino['arduino_id'] ] == False and any( active for active in arduino_alarms.values() ):
					ser.write("REMOTE ALARM TRIGGER")
				i += 1 #iterate count
			except ValueError:  # includes simplejson.decoder.JSONDecodeError
				print 'Decoding JSON has failed'
				except_counter +=1
				if except_counter == 10:
					break
			except serial.serialutil.SerialException: #handle serial disconnect/failure
				print 'Serial Issue - Read'
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
arduinos_list = getArduinoPorts()

while True: 
	try: # listen to each arduino
		arduinos_list = getArduinoPorts()
		map( parseInput, arduinos_list ) #currently round robins on 30 second rotations
		#should find a way to async multiprocess 
		#pool().map_async wasn't working =_=
	except KeyboardInterrupt:
		break