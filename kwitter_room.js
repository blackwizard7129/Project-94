
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCIgEYBGd80qh2ImmX3mVH9pPtYc5bFAVI",
  authDomain: "kwitter-project-98d57.firebaseapp.com",
  databaseURL: "https://kwitter-project-98d57-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-98d57",
  storageBucket: "kwitter-project-98d57.appspot.com",
  messagingSenderId: "259245664505",
  appId: "1:259245664505:web:97d5fcc8e88b7068bc5a28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
