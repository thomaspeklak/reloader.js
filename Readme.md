#Reloader.JS

Reloader.JS lets you trigger a browser reload while developing on an application.

Fire up the server with

    node server.js

Add these two scripts to your document:

    <script src="http://localhost:17001/socket.io/socket.io.js"></script>
    <script src="http://localhost:17001/reloader.js"></script>

And when you visit `http://localhost:17001` a reload of the browser is triggered
