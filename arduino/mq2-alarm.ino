const int gasPin = A0; //GAS sensor output pin to Arduino analog A0 pin
const int buzzerPin = 9

void setup()
{
	Serial.begin(9600); //Initialize serial port - 9600 bps
	pinMode(buzzerPin, OUTPUT);
}

void loop()
{
	int reading = analogRead(gasPin)
	Serial.println(reading);
	if( reading > 200 ) {
		tone(buzzerPin, 1000, 200) 
	} 
	delay(1000); // Print value every 1 sec.
}

