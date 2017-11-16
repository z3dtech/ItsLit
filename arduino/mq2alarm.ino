const int gasPin = A0; //GAS sensor output pin to Arduino analog A0 pin
const int buzzer = 10;

void setup()
{
	Serial.begin(9600); //Initialize serial port - 9600 bps
}

void loop()
{
        int reading = analogRead(gasPin);
	Serial.println(reading);
        if( reading > 200 ) {
          Serial.println("alarm!");
          tone(buzzer, 1000, 200);
        } else {
           noTone(buzzer);
        } 
	delay(1000); // Print value every 1 sec.
}

