// initial usb serial interface
// Initially the USB serial port name and adress is "COM12"
// Shim with all the minimum routines needed to select and open a USB serial port 
// Stub anything that is not critical to getting a connection
// use bluetooth.ts and meshtastic.ts tcpip connections as example, but if the address starts with "COM" then it's a usb serial port
// for now just present "COM12" as option and open/close/connect commands should use COM12
