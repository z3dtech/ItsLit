import serial

ser = serial.Serial('/dev/ttyUSB0, 9600)

while True:
	try: 
		line = ser.readline()
		print(line)
	except KeyboardInterrupt:
		break


ser.flushInput()


ser.close()
#create.arduino.cc aritro smoke detection mq2
