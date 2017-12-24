![itsLit](diagrams/logo/Artboard%201.png)

## The Product

ItsLit is a complete open source end-to-end IoT smoke/fire detection system. It utilizes an Arduino based circuit with an MQ-2 sensor for smoke, carbon monoxide, and flammable gases. The readings are processed by a Raspberry Pi running the python script read.py, and relayed to a sto API instance for storage/processing via the StoPy wrapper package. The reading data can then be live read through the react app which connects to the same API.

### Building the Circuit:

[Documentation](https://github.com/z3dtech/ItsLit/tree/master/arduino)

### Configuring the Pi

The Pi can handle as many circuits as you have USB ports with an upper limit of processing power (each connection spawns its own process via python multiprocessing). Once the arduino circuits are up and running, one must populate the secret.json file with the details for their sto API instance. The API key will require write credentials on the sto API for any and all collections you wish to write to.

Once configured, simply running the read.py script will execute the following:

1) Relay the data to the sto API
2) Relay alarm signals to all other connected ItsLit devices

### Configuring the API

[Documenation](https://github.com/z3dtech/sto)

### Configuring the React App

The React App is divided into two parts, the backend and the client, both of which can be launched using npm start. Again, you will need to configure your secret.json for with a sto API connection and an API key that has read credentials on all relevant collections.

(THIS PART ISN'T QUITE DONE YET! -- STILL DOING SOME CLEANUP AND HOPING TO INTEGRATE WEB SOCKETS)

