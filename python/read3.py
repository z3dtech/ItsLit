import serial
import StoPy


#list ports 
#find arduinos
#id arduinos somehow --
#listen to arduinos
#store obj

serialPort = 9600

ports = list(serial.tools.list_ports.comports())
for p in ports:
	print(p)
	if 'Arduino' in p[1]:
    	print('This is an Arduino!')


ser = serial.Serial('/dev/ttyUSB0', serialPort)

ser.flushInput()

while True:
    try:
        line = ser.readline()
        print(line)
    except KeyboardInterrupt:
        break


ser.close()
#https://create.arduino.cc/projecthub/Aritro/smoke-detection-using-mq-2-gas-sensor-79c54a
