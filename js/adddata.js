var alternate  = document.getElementById('alternate');
var paid  = document.getElementById('paid');

var storageRef = firebase.storage().ref();
storageRef.child('/Website/logo2.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('logo');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: "+error);
  });

function sendinfo(){
    alert("THANKS FOR YOUR SUPPORT!");
    let firebasedb = firebase.database();
    let alt = alternate.value;
    let p = paid.value
    console.log("alt: " + alt + "\npaid: " + p);
    firebasedb.ref('/UserInput-Web').push({
        alternative: alternate.value,
        paid: paid.value
    });
}