# Arduino Documentation

This Arduino Project is written to take in readings of air quality according to the circuit design, and output them to the serial in JSON form where they are read by the corresponding python listener/reader script. Additionally, if any input to the circuit is sent via serial, it will also set off an alarm. This is to replicate a foggy layer signal issuance (where one alarm triggering should set off all the alarms). 

### How to Build the Circuit

You can follow the following diagram:

![diagram](/diagrams/CircuitDiagram.png)

Please note, the MQ2 sensor illustration is a little wonky because it is a custom sensor not included in Fritzing. Essentially, check the labels and VCC connects to power, GND connects to ground, and A0 connects to the board input pin.

### Hardware Requirements

* Arduino Uno or Sparkfun Redboard
* Solderless Breadboard
* 1 MQ2 Smoke Sensor [purchase here](https://www.amazon.com/Sensor-Module-Methane-Detection-Arduino/dp/B01MEHLVVT)
* 1 RGB LED (usually included in a kit)
* 1 Piezo Speaker (usually included in kits)
* 12 Connection Wires

The python piece is written specifically for unique identifiers / serial numbers on Raspberry Pi, so that could possibly be included on this list but the circuit itself will run on any connected computer with the Arduino IDE

### Software Requirements

* Arduino IDE

You must also download, import, and install the [ArduinoJSON](https://github.com/bblanchon/ArduinoJson) Library into your local Arduino IDE in order to run the code. You can add a Libraries/ directory to the mq2alarm directory included in this repo and importing is pretty simple. 

### Potential Improvements

1. The actual calibration function currently uses a linear approximation rather than a true logarithmic representation of the resistance changes, and thus it is pretty much useless for distinguishing what specific gas is actually causing the signal changes.

2. A PoE Ethernet Shield version would be pretty awesome

3. A fireproof fiberglass or polycarbonate acrylic shell casing would be awesome, so the sensor continue to collect data even in the midst of an etreme fire.
