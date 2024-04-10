
As you requested, I have developed the applications using FE(Angular), BE(Java with Springboot), and DB(Postgresql). 

DB Configuration as per my code:
url=jdbc:postgresql://localhost:4201/pmv_db
username=postgres
password=admin12345

Please configure before you start the Java application as your localhost DB and username and password

Angular application run:
	-ng serve

Basic authentification is added for the user login.

User lists are hardcoded once the application starts with FE and BE.

-----------------------------------------------

Credential:

Administrator:
	username: admin
	password: admin
     
Engineer:
	username: engineer
	password: engineer

Driver:
	username: driver
	password: driver
	
Manager:
	username: manager
	password: manager

--------------------------------------------

Administrators can add, edit, view, and delete the car details.

The engineer can check the notification and create the ticket for that notification. It can create, edit, and view the tickets.

The manager can view the service list and details.

The driver can see the history.



