
#include <EEPROM.h>
const int gasPin = A0; //GAS sensor output pin to Arduino analog A0 pin
const int buzzer = 10;
const int threshold = 250;

const int redPin = 13;
const int greenPin = 12;


void setup()
{
	Serial.begin(9600); //Initialize serial port - 9600 bps
        pinMode(redPin, OUTPUT);
        pinMode(greenPin, OUTPUT);
}

void loop()
{
        //Serial.println(EEPROM.read(0));
        int reading = analogRead(gasPin);
	Serial.println(reading);
        if( reading > threshold ) {
          //Serial.println("alarm!");
          redLight();
          tone(buzzer, 1000, 500);
        } else {
          greenLight();
          noTone(buzzer);
        } 
	delay(500); // Print value every 1 sec.
        turnOffLight();
        delay(500);
}

void redLight() {
  analogWrite(redPin, 255);
}

void greenLight(){
  analogWrite(greenPin, 255);
}

void turnOffLight(){
  analogWrite(greenPin, 0);
  analogWrite(redPin, 0);
}
