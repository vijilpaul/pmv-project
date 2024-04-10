
As you requested, I have developed the applications using FE(Angular), BE(Java with Springboot), and DB(Postgresql). </br>

DB Configuration as per my code:</br>
<b>url=jdbc:postgresql://localhost:4201/pmv_db </b> </br>
<b>username=postgres</b> </br>
<b>password=admin12345</b> </br>

Please configure before you start the Java application as your localhost DB and username and password.</br>

Angular application run:</br>
	-<b>ng serve</b> </br>

Basic authentification is added for the user login.</br>

User lists are hardcoded once the application starts with FE and BE.</br>

-----------------------------------------------

<b>Credential:</b></br>

<b>Administrator:</b></br>
	username: admin</br>
	password: admin</br>
     
<b>Engineer:</b></br>
	username: engineer</br>
	password: engineer</br>

<b>Driver:</b></br>
	username: driver</br>
	password: driver</br>
	
<b>Manager:</b></br>
	username: manager</br>
	password: manager</br>

--------------------------------------------

Administrators can add, edit, view, and delete the car details.

The engineer can check the notification and create the ticket for that notification. It can create, edit, and view the tickets.

The manager can view the service list and details.

The driver can see the history.



