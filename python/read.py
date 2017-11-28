import serial
import serial.tools.list_ports
import json
from time import sleep
from time import time
from StoPy import StoPy
from multiprocessing import Pool

sto = StoPy.StoPy( "localhost", "8080", "cbab68f9e00f1ffc58f198e042064d54" ) 

# this function generates an ID for the Pi MCU

def getPiId():
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



# this function scans all USB ports for arduino connections and stores them

def getArduinoPorts():
	arduinos = []
	arduino_labels = ('Arduino', 'FT231X')
	ports = list( serial.tools.list_ports.comports() )
	for p in ports:
	    if any( s in p.description for s in arduino_labels ):
	    	arduinos.append( {'port': p[0], 'arduino_id': p.serial_number } )
	return arduinos

# this function listens to an individual arduino

def parseInput( arduino, listen=9600 ):
	print( "re-calibrating arduino" )
	print(arduino)
	upload = { 'collection': getPiId(), 'owner': arduino['arduino_id'] }
	i = 0
	except_counter = 0
	port = arduino['port']
	ser = serial.Serial( port, listen, timeout=15 )
	while i < 10:
		try: 
			lines = ser.read(255).split("\n")
			#print( lines[len(lines)-2] )
			upload['data'] = json.loads( lines[len(lines)-2] )
			upload['data']['time'] = int(time())
			print( upload )
			print( sto.insert(upload['collection'], upload['owner'], upload['data']) )
			i += 1
		except ValueError:  # includes simplejson.decoder.JSONDecodeError
			print 'Decoding JSON has failed'
			except_counter +=1
			if except_counter == 10:
				break
		except serial.serialutil.SerialException:
			print 'Serial Issue - Read'
			except_counter +=1
			if except_counter == 4:
				break
			sleep(15)
	try:
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