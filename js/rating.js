var pname = document.getElementById('pname');
var stars = document.getElementById('stars');
var suggestion = document.getElementById('suggestion');

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
    alert("THANKS FOR RATING US!")
    let firebasedb = firebase.database();
    let name1 = pname.value;
    let stars1 = stars.value;
    let suggestion1 = suggestion.value;
    console.log("n: "+name1+"\nstars: "+stars1+"\nsuggestion: "+suggestion1);
    firebasedb.ref('/Ratings-Web').push({
        name: name1,
        stars: stars1,
        suggestion: suggestion1
    });
}