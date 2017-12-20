# Python Documentation

The included code (read.py ) performs the following functions:

* Identify all connected Arduinos or Sparkfun Redboards and their corresponding USB ports
* Multithreaded (simultaneous) data reads from all connected Arduinos or Sparkfun Redboards running the ItsLit mq2alarm arduino code
* If a single board sends an alarm signal, relay alarm signal to all other connected boards
* Uploads all data to a [sto API](https://github.com/z3dtech/sto) instance using the [StoPy](https://github.com/z3dtech/StoPy) python package.

### Setup

Add a secret.json file that details the address of your sto api, the port, and the API key you are using to write data. See [example.secret.json](./example.secret.json). 
One could potentially install the sto API on localhost and simply add 127.0.0.1 to the secret.json if your Pi has reasonable storage capacity. 
The script currently generates approximately 30-50MB of data per year per sensor.

### Issues

* Sudden disconnects aren't handled well
* The script continuously recalibrates every 10 to 50 reads which will allow 
* There is no build/continuous run functionality built in. It must be maintained and monitored on server side.