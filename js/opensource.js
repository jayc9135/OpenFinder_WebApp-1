// For Main Logo
var storageRef = firebase.storage().ref();
storageRef.child('/Website/logo2.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('logo');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: "+error);
  });

// For Piracy logo
var storageRef = firebase.storage().ref();
storageRef.child('/Website/Homepage/piracy.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('piracy');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: "+error);
});

// For opensource logo
var storageRef = firebase.storage().ref();
storageRef.child('/Website/Homepage/opensource.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('open-source');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: "+error);
});