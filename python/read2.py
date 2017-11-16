import serial

ser = serial.Serial('/dev/ttyUSB0', 9600)

ser.flushInput()

while True:
    try:
        line = ser.readline()
        print(line)
    except KeyboardInterrupt:
        break


ser.close()
https://create.arduino.cc/projecthub/Aritro/smoke-detection-using-mq-2-gas-sensor-79c54a
