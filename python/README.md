# Python Documentation

The included code (read.py ) performs the following functions:

* Identify all connected Arduinos or Sparkfun Redboards and their corresponding USB ports
* Multithreaded (simultaneous) data reads from all connected Arduinos or Sparkfun Redboards running the ItsLit mq2alarm arduino code
* If a single board sends an alarm signal, relay alarm signal to all other connected boards
* Uploads all data to a [sto API](https://github.com/z3dtech/sto) instance using the [StoPy](https://github.com/z3dtech/StoPy) python package.

### Setup

Add a secret.json file that details the address of your sto api, the port, and the API key you are using to write data. See [secret.example.json](./secret.example.json). 
One could potentially install the sto API on localhost and simply add 127.0.0.1 to the secret.json if the connected Pi has a reasonable storage capacity. The script currently generates an estimated 30-50MB of data per year per sensor, but one could lower the frequency of reads to reduce data consumption.

### Issues

* Sudden hardware disconnects aren't handled well
* The script continuously recalibrates the sensors every 10 to 50 reads which will allow bad air to reset the alarm standards on the MQ2.
* There is no build/continuous run functionality built-in to the script. It must be maintained and monitored on SBC somehow.
