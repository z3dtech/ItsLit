import serial
import serial.tools.list_ports
import json
from StoPy import StoPy
from multiprocessing import Pool

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


def getArduinoPorts():
	arduinos = []
	arduino_labels = ('Arduino', 'FT231X')
	ports = list( serial.tools.list_ports.comports() )
	for p in ports:
	    if any( s in p.description for s in arduino_labels ):
	    	arduinos.append( {'port': p[0], 'arduino_id': p.serial_number } )
	return arduinos

#

def parseInput( arduino, listen=9600 ):
	print( "attempting to read arduino" )
	print(arduino)
	i = 0
	except_counter = 0
	port = arduino['port']
	ser = serial.Serial( port, listen, timeout=15 )
	while i < 5:
		try: 
			print( ser.read(255) )
			i += 1
		except serial.serialutil.SerialException:
		    except_counter +=1
		    if except_counter == 5:
		       break
		except KeyboardInterrupt:
			break
	ser.flushInput()
	ser.close()
	return True

#sto = StoPy.StoPy( "localhost", "8080", "api_key" ) 
# should load this info from a hidden file
arduinos_list = getArduinoPorts()
collection = getPiId()
print( "collection:" )
#multiprocess
while True:
	map( parseInput, arduinos_list )
