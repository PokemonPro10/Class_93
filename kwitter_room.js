
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC9hJqDeAXp2F-8a2QexfTneWlLyH12l6M",
      authDomain: "kwitter-619fb.firebaseapp.com",
      projectId: "kwitter-619fb",
      storageBucket: "kwitter-619fb.appspot.com",
      messagingSenderId: "546675516935",
      appId: "1:546675516935:web:02e5333dd4e3100982aca2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
