//For open finder logo
var storageRef = firebase.storage().ref();
storageRef.child('/Website/logo2.png').getDownloadURL()
    .then((url) => {
        var img1 = document.getElementById('logo');
        img1.setAttribute('src', url);
    })
    .catch((error) => {
        console.log("ERROR LOADING IMAGES: " + error);
    });

//Display the softwares
function setdata(n) {
    category_name.innerHTML = n;
    category_description.innerHTML = "Below you will find various open source " + n + ".";
}

//Firestore
function firestoredb(cat) {
    var db = firebase.firestore();
    db.collection(cat).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                var d = doc.data();
                document.getElementById('software_div').innerHTML += '<li class="softwares"> <img src="' + d.descriptionImage + '" alt="soft_logo" id="soft_logo"> <h4>' + d.heading + '</h4>' + d.description + '<br><br>Source Code: <a href="' + d.sourcecode + '" target="_blank">' + d.sourcecode + '</a>' + '<br><br>Download Link: <a href="' + d.downloadlink + '" target="_blank">' + d.downloadlink + '</a>' + '</li>';
            });
        });
}


//Get category
var n1 = window.localStorage.getItem("cat");
console.log("Category: " + n1);
setdata(n1);
firestoredb(n1);

